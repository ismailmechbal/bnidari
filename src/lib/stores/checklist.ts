import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';
import { phases, type StepStatus } from '$lib/data/steps';

const STORAGE_KEY = 'bnidari-checklist';

type ChecklistState = Record<string, StepStatus>;

function loadState(): ChecklistState {
	if (!browser) return {};
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : {};
	} catch {
		return {};
	}
}

function createChecklistStore() {
	const { subscribe, set, update } = writable<ChecklistState>(loadState());

	if (browser) {
		subscribe((state) => {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		});
	}

	return {
		subscribe,
		toggleStep(stepId: string) {
			update((state) => {
				const current = state[stepId] ?? 'pending';
				const next: StepStatus = current === 'done' ? 'pending' : 'done';
				return { ...state, [stepId]: next };
			});
		},
		skipStep(stepId: string) {
			update((state) => {
				const current = state[stepId] ?? 'pending';
				const next: StepStatus = current === 'skipped' ? 'pending' : 'skipped';
				return { ...state, [stepId]: next };
			});
		},
		getStatus(state: ChecklistState, stepId: string): StepStatus {
			return state[stepId] ?? 'pending';
		},
		reset() {
			set({});
		}
	};
}

export const checklist = createChecklistStore();

export const totalSteps = phases.reduce((acc, phase) => acc + phase.steps.length, 0);

export const completedSteps = derived(checklist, ($checklist) =>
	Object.values($checklist).filter((s) => s === 'done').length
);

export const globalProgress = derived(completedSteps, ($completed) =>
	totalSteps > 0 ? Math.round(($completed / totalSteps) * 100) : 0
);

export function getPhaseProgress(
	state: ChecklistState,
	phaseId: string
): { completed: number; total: number; percent: number } {
	const phase = phases.find((p) => p.id === phaseId);
	if (!phase) return { completed: 0, total: 0, percent: 0 };
	const total = phase.steps.length;
	const completed = phase.steps.filter(
		(s) => state[s.id] === 'done' || state[s.id] === 'skipped'
	).length;
	return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
}
