export type StepStatus = 'pending' | 'in_progress' | 'done' | 'skipped';

export interface Step {
	id: string;
	titleFr: string;
	titleAr: string;
	descriptionFr: string;
	descriptionAr: string;
	documents?: string[];
	documentsAr?: string[];
	estimatedDuration?: string;
	estimatedDurationAr?: string;
	estimatedCost?: string;
	estimatedCostAr?: string;
	tips?: string;
	tipsAr?: string;
	isOptional?: boolean;
	links?: { label: string; url: string }[];
}

export interface Phase {
	id: string;
	emoji: string;
	titleFr: string;
	titleAr: string;
	steps: Step[];
}

export const phases: Phase[] = [
	{
		id: 'acquisition-terrain',
		emoji: '🏗️',
		titleFr: 'Acquisition du Terrain',
		titleAr: 'شراء الأرض',
		steps: [
			{
				id: 'verification-titre-foncier',
				titleFr: 'Vérification du titre foncier',
				titleAr: 'التحقق من الرسم العقاري',
				descriptionFr:
					"Vérifiez auprès de la Conservation Foncière (ANCFCC) que le terrain possède un titre foncier (TF) valide, qu'il n'est grevé d'aucune hypothèque ni opposition, et que le vendeur en est bien le propriétaire inscrit.",
				descriptionAr:
					'تحقق لدى المحافظة العقارية أن الأرض تتوفر على رسم عقاري صالح، وأنها غير مثقلة بأي رهن أو تعرض، وأن البائع هو المالك المسجل فعلاً.',
				documents: [
					'Certificat de propriété (شهادة الملكية)',
					'Plan cadastral',
					"Carte d'identité du vendeur"
				],
				documentsAr: ['شهادة الملكية', 'التصميم المساحي', 'بطاقة تعريف البائع'],
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع',
				estimatedCost: '~150–300 DH (frais de certificat)',
				estimatedCostAr: '~150–300 درهم (رسوم الشهادة)',
				tips: 'Demandez un certificat de propriété récent (moins de 3 mois). Vérifiez aussi le plan d\'aménagement pour connaître la destination de la zone (habitat, agricole, industriel).',
				tipsAr: 'اطلب شهادة ملكية حديثة (أقل من 3 أشهر). تحقق أيضاً من تصميم التهيئة لمعرفة تخصيص المنطقة.',
				links: [
					{
						label: 'ANCFCC — Conservation Foncière',
						url: 'https://www.ancfcc.gov.ma'
					}
				]
			},
			{
				id: 'compromis-vente',
				titleFr: 'Compromis de vente',
				titleAr: 'عقد الوعد بالبيع',
				descriptionFr:
					"Rédigez un compromis de vente (sous seing privé) avec le vendeur. Ce document fixe les conditions de la vente : prix, délais, conditions suspensives. Il est recommandé de le faire légaliser.",
				descriptionAr:
					'حرر عقد وعد بالبيع (تحت الخاتم) مع البائع. هذه الوثيقة تحدد شروط البيع: الثمن، الآجال، الشروط الواقفة. يُستحسن تصحيح الإمضاءات.',
				documents: [
					"Copies CIN des deux parties",
					'Titre foncier ou certificat de propriété',
					'Plan du terrain'
				],
				documentsAr: ['نسخ بطاقة التعريف للطرفين', 'الرسم العقاري أو شهادة الملكية', 'تصميم الأرض'],
				estimatedDuration: '1–3 jours',
				estimatedDurationAr: '1–3 أيام',
				tips: "Incluez une clause suspensive liée à l'obtention du prêt bancaire si vous comptez financer par crédit. Versez un acompte (arrhes) raisonnable, généralement 10%.",
				tipsAr: 'أضف شرطاً واقفاً مرتبطاً بالحصول على القرض البنكي إذا كنت تنوي التمويل بالقرض. ادفع عربوناً معقولاً، عادة 10%.'
			},
			{
				id: 'acte-vente-notarie',
				titleFr: 'Acte de vente notarié',
				titleAr: 'عقد البيع التوثيقي',
				descriptionFr:
					"Faites établir l'acte de vente définitif par un notaire agréé. Le notaire vérifie la situation juridique du bien, rédige l'acte, et procède à l'enregistrement et à l'inscription au titre foncier.",
				descriptionAr:
					'أنجز عقد البيع النهائي لدى موثق معتمد. يتحقق الموثق من الوضعية القانونية للعقار، يحرر العقد، ويتولى التسجيل والتقييد بالرسم العقاري.',
				documents: [
					'CIN des parties',
					'Titre foncier original',
					'Certificat de propriété récent',
					'Plan cadastral',
					'Quittance de paiement des impôts fonciers'
				],
				documentsAr: [
					'بطاقة تعريف الأطراف',
					'الرسم العقاري الأصلي',
					'شهادة ملكية حديثة',
					'التصميم المساحي',
					'وصل أداء الضرائب العقارية'
				],
				estimatedDuration: '2–4 semaines',
				estimatedDurationAr: '2–4 أسابيع',
				estimatedCost: '~1–1.5% du prix (honoraires notaire)',
				estimatedCostAr: '~1–1.5% من الثمن (أتعاب الموثق)',
				tips: "Choisissez un notaire de confiance, idéalement recommandé. Les honoraires sont réglementés mais peuvent varier. Demandez un devis détaillé avant de signer.",
				tipsAr: 'اختر موثقاً موثوقاً، يُفضل أن يكون بتوصية. الأتعاب منظمة لكن قد تختلف. اطلب تقديراً مفصلاً قبل التوقيع.'
			},
			{
				id: 'droits-enregistrement',
				titleFr: "Paiement des droits d'enregistrement",
				titleAr: 'أداء رسوم التسجيل',
				descriptionFr:
					"Payez les droits d'enregistrement auprès de la Direction Générale des Impôts (DGI). Le taux est de 4% du prix de vente pour les terrains nus, plus 1.5% de frais de conservation foncière.",
				descriptionAr:
					'أدِّ رسوم التسجيل لدى المديرية العامة للضرائب. النسبة هي 4% من ثمن البيع للأراضي العارية، زائد 1.5% رسوم المحافظة العقارية.',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع',
				estimatedCost: '~4% (enregistrement) + ~1.5% (conservation)',
				estimatedCostAr: '~4% (تسجيل) + ~1.5% (محافظة عقارية)',
				tips: "Le notaire se charge généralement de cette démarche. Assurez-vous d'avoir les fonds disponibles car ces frais sont dus au moment de la signature.",
				tipsAr: 'يتولى الموثق عادة هذه العملية. تأكد من توفر المبلغ لأن هذه الرسوم مستحقة عند التوقيع.'
			},
			{
				id: 'inscription-titre-foncier',
				titleFr: 'Inscription au titre foncier',
				titleAr: 'التقييد بالرسم العقاري',
				descriptionFr:
					"Le notaire procède à l'inscription de la vente sur le titre foncier auprès de la Conservation Foncière. Cette étape officialise le transfert de propriété à votre nom.",
				descriptionAr:
					'يتولى الموثق تقييد البيع بالرسم العقاري لدى المحافظة العقارية. هذه المرحلة ترسم نقل الملكية باسمك.',
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				tips: "Suivez l'avancement auprès de la Conservation Foncière. Le délai peut être plus long dans les grandes villes.",
				tipsAr: 'تابع سير العملية لدى المحافظة العقارية. قد تكون المدة أطول في المدن الكبرى.',
				links: [
					{
						label: 'ANCFCC — Services en ligne',
						url: 'https://www.ancfcc.gov.ma'
					}
				]
			},
			{
				id: 'certificat-propriete',
				titleFr: 'Obtention du certificat de propriété',
				titleAr: 'الحصول على شهادة الملكية',
				descriptionFr:
					"Une fois l'inscription effectuée, retirez votre nouveau certificat de propriété mentionnant votre nom comme propriétaire du terrain.",
				descriptionAr:
					'بعد إتمام التقييد، اسحب شهادة الملكية الجديدة التي تحمل اسمك كمالك للأرض.',
				estimatedDuration: '1–2 semaines après inscription',
				estimatedDurationAr: '1–2 أسابيع بعد التقييد',
				estimatedCost: '~75–150 DH',
				estimatedCostAr: '~75–150 درهم'
			}
		]
	},
	{
		id: 'etudes-conception',
		emoji: '📐',
		titleFr: 'Études et Conception',
		titleAr: 'الدراسات والتصميم',
		steps: [
			{
				id: 'plan-amenagement',
				titleFr: "Consultation du Plan d'Aménagement",
				titleAr: 'الاطلاع على تصميم التهيئة',
				descriptionFr:
					"Consultez le Plan d'Aménagement (PA) de votre commune pour vérifier la vocation de la zone, le coefficient d'occupation du sol (COS), la hauteur maximale autorisée, et les servitudes éventuelles.",
				descriptionAr:
					'اطلع على تصميم التهيئة للجماعة لمعرفة تخصيص المنطقة، معامل استغلال الأرض، الارتفاع الأقصى المسموح به، والارتفاقات المحتملة.',
				documents: ["Extrait du Plan d'Aménagement", 'Note de renseignements urbanistiques'],
				documentsAr: ['مستخرج من تصميم التهيئة', 'شهادة المعلومات التعميرية'],
				estimatedDuration: '1–3 jours',
				estimatedDurationAr: '1–3 أيام',
				tips: "Cette étape est cruciale avant de commencer la conception. Le PA détermine ce que vous pouvez construire (R+2, R+3, villa, etc.).",
				tipsAr: 'هذه المرحلة حاسمة قبل بدء التصميم. تصميم التهيئة يحدد ما يمكنك بناؤه.',
				links: [
					{
						label: 'Portail des communes',
						url: 'https://www.communes.gov.ma'
					}
				]
			},
			{
				id: 'recrutement-architecte',
				titleFr: "Recrutement d'un architecte agréé",
				titleAr: 'تعيين مهندس معماري معتمد',
				descriptionFr:
					"Engagez un architecte inscrit à l'Ordre des Architectes du Maroc. L'architecte est obligatoire pour toute construction dépassant une certaine surface. Il conçoit les plans et assure le suivi architectural.",
				descriptionAr:
					'عيّن مهندساً معمارياً مسجلاً بهيئة المهندسين المعماريين بالمغرب. المهندس المعماري إلزامي لكل بناء يتجاوز مساحة معينة. يصمم المخططات ويتولى المتابعة المعمارية.',
				estimatedCost: '~3–8% du coût de construction',
				estimatedCostAr: '~3–8% من تكلفة البناء',
				tips: "Demandez des références et visitez des réalisations précédentes. Comparez au moins 3 devis. L'architecte sera votre interlocuteur principal tout au long du projet.",
				tipsAr: 'اطلب مراجع وزُر مشاريع سابقة. قارن 3 عروض أسعار على الأقل. المهندس المعماري سيكون محاورك الرئيسي طوال المشروع.'
			},
			{
				id: 'leve-topographique',
				titleFr: 'Levé topographique',
				titleAr: 'الرفع الطبوغرافي',
				descriptionFr:
					"Faites réaliser un levé topographique du terrain par un géomètre-expert agréé. Ce document est indispensable pour l'implantation de la construction et le dossier du permis de construire.",
				descriptionAr:
					'أنجز رفعاً طبوغرافياً للأرض من طرف مهندس مساح معتمد. هذه الوثيقة ضرورية لتموضع البناء وملف رخصة البناء.',
				estimatedDuration: '3–7 jours',
				estimatedDurationAr: '3–7 أيام',
				estimatedCost: '~2 000–5 000 DH',
				estimatedCostAr: '~2,000–5,000 درهم',
				isOptional: true,
				tips: "Obligatoire si le terrain est en pente ou de forme irrégulière. Fortement recommandé dans tous les cas.",
				tipsAr: 'إلزامي إذا كانت الأرض منحدرة أو غير منتظمة الشكل. يُنصح به بشدة في جميع الحالات.'
			},
			{
				id: 'etude-sol',
				titleFr: 'Étude de sol',
				titleAr: 'دراسة التربة',
				descriptionFr:
					"Faites réaliser une étude géotechnique par un bureau d'études spécialisé. Cette étude détermine le type de fondations adapté à la nature du sol de votre terrain.",
				descriptionAr:
					'أنجز دراسة جيوتقنية من طرف مكتب دراسات متخصص. هذه الدراسة تحدد نوع الأساسات المناسب لطبيعة تربة أرضك.',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع',
				estimatedCost: '~3 000–8 000 DH',
				estimatedCostAr: '~3,000–8,000 درهم',
				tips: "Ne négligez jamais l'étude de sol. Un mauvais dimensionnement des fondations peut compromettre toute la construction.",
				tipsAr: 'لا تهمل أبداً دراسة التربة. تقدير خاطئ للأساسات قد يعرض كل البناء للخطر.'
			},
			{
				id: 'plans-architecturaux',
				titleFr: 'Conception des plans architecturaux',
				titleAr: 'تصميم المخططات المعمارية',
				descriptionFr:
					"L'architecte élabore les plans architecturaux complets : plans de masse, plans d'étages, coupes, façades. Les plans doivent respecter le Plan d'Aménagement et les règlements d'urbanisme.",
				descriptionAr:
					'يُعد المهندس المعماري المخططات المعمارية الكاملة: تصميم الموقع، مخططات الطوابق، المقاطع، الواجهات. يجب أن تحترم المخططات تصميم التهيئة وأنظمة التعمير.',
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				tips: "Prenez le temps de bien définir vos besoins (nombre de chambres, orientation, espaces communs). Les modifications après permis de construire sont coûteuses.",
				tipsAr: 'خذ وقتك لتحديد احتياجاتك (عدد الغرف، التوجيه، المساحات المشتركة). التعديلات بعد رخصة البناء مكلفة.'
			},
			{
				id: 'plans-techniques',
				titleFr: 'Plans techniques',
				titleAr: 'المخططات التقنية',
				descriptionFr:
					"Faites réaliser les plans techniques par des bureaux d'études spécialisés : structure béton armé (ingénieur béton), plans électricité et plomberie. Ces plans accompagnent le dossier du permis.",
				descriptionAr:
					'أنجز المخططات التقنية من طرف مكاتب دراسات متخصصة: هيكل الخرسانة المسلحة (مهندس خرسانة)، مخططات الكهرباء والسباكة. هذه المخططات ترافق ملف الرخصة.',
				estimatedDuration: '2–4 semaines',
				estimatedDurationAr: '2–4 أسابيع',
				estimatedCost: '~5 000–15 000 DH (selon complexité)',
				estimatedCostAr: '~5,000–15,000 درهم (حسب التعقيد)'
			}
		]
	},
	{
		id: 'permis-construire',
		emoji: '📋',
		titleFr: 'Permis de Construire',
		titleAr: 'رخصة البناء',
		steps: [
			{
				id: 'constitution-dossier-pc',
				titleFr: 'Constitution du dossier',
				titleAr: 'تكوين الملف',
				descriptionFr:
					"Rassemblez tous les documents nécessaires pour le dépôt du permis de construire : plans architecturaux signés et visés par l'architecte, titre foncier, note de calcul béton, plans techniques, etc.",
				descriptionAr:
					'اجمع جميع الوثائق اللازمة لإيداع طلب رخصة البناء: المخططات المعمارية الموقعة والمؤشر عليها من المهندس المعماري، الرسم العقاري، مذكرة حساب الخرسانة، المخططات التقنية، إلخ.',
				documents: [
					'Plans architecturaux visés (6 exemplaires)',
					'Titre foncier ou certificat de propriété',
					"Note de calcul béton armé signée par l'ingénieur",
					'Plans techniques (électricité, plomberie)',
					'Plan de situation et plan cadastral',
					"Copie CIN du propriétaire",
					"Attestation d'architecte"
				],
				documentsAr: [
					'المخططات المعمارية المؤشر عليها (6 نسخ)',
					'الرسم العقاري أو شهادة الملكية',
					'مذكرة حساب الخرسانة المسلحة موقعة من المهندس',
					'المخططات التقنية (كهرباء، سباكة)',
					'تصميم الموقع والتصميم المساحي',
					'نسخة بطاقة تعريف المالك',
					'شهادة المهندس المعماري'
				]
			},
			{
				id: 'depot-dossier-pc',
				titleFr: 'Dépôt du dossier à la Commune',
				titleAr: 'إيداع الملف بالجماعة',
				descriptionFr:
					"Déposez le dossier complet au guichet unique de la commune ou via le portail en ligne e-Rkhssa. Vous recevrez un récépissé de dépôt avec un numéro de suivi.",
				descriptionAr:
					'أودع الملف الكامل بالشباك الوحيد للجماعة أو عبر بوابة الرخص الإلكترونية. ستحصل على وصل إيداع برقم تتبع.',
				estimatedDuration: '1 jour',
				estimatedDurationAr: 'يوم واحد',
				tips: "Le portail e-Rkhssa permet de suivre l'avancement de votre dossier en ligne. Gardez précieusement le récépissé.",
				tipsAr: 'بوابة الرخص الإلكترونية تمكنك من تتبع تقدم ملفك عبر الإنترنت. احتفظ بوصل الإيداع.',
				links: [
					{
						label: 'Portail e-Rkhssa',
						url: 'https://www.erkhssa.ma'
					}
				]
			},
			{
				id: 'instruction-dossier-pc',
				titleFr: 'Instruction du dossier',
				titleAr: 'دراسة الملف',
				descriptionFr:
					"La commune instruit votre dossier en concertation avec les services techniques (Agence Urbaine, Protection Civile, etc.). Le délai légal est de 30 jours pour les petits projets, 60 jours pour les plus importants.",
				descriptionAr:
					'تدرس الجماعة ملفك بالتشاور مع المصالح التقنية (الوكالة الحضرية، الوقاية المدنية، إلخ). الأجل القانوني هو 30 يوماً للمشاريع الصغيرة، 60 يوماً للأكبر.',
				estimatedDuration: '30–60 jours (délai légal)',
				estimatedDurationAr: '30–60 يوماً (أجل قانوني)',
				tips: "Si le dossier est incomplet, la commune vous demandera des pièces complémentaires. Répondez rapidement pour ne pas rallonger les délais.",
				tipsAr: 'إذا كان الملف ناقصاً، ستطلب الجماعة وثائق إضافية. أجب بسرعة لتفادي تمديد الآجال.'
			},
			{
				id: 'reception-permis-construire',
				titleFr: 'Réception du permis de construire',
				titleAr: 'استلام رخصة البناء',
				descriptionFr:
					"Retirez votre permis de construire auprès de la commune. Le permis est valable 3 ans — les travaux doivent commencer dans ce délai sous peine de péremption.",
				descriptionAr:
					'اسحب رخصة البناء من الجماعة. الرخصة صالحة لمدة 3 سنوات — يجب أن تبدأ الأشغال في هذا الأجل وإلا سقطت.',
				estimatedDuration: '1–2 semaines après approbation',
				estimatedDurationAr: '1–2 أسابيع بعد الموافقة',
				tips: "Vérifiez que toutes les mentions du permis sont correctes (nom, adresse, surface, hauteur). Toute erreur doit être signalée immédiatement.",
				tipsAr: 'تحقق من صحة جميع بيانات الرخصة (الاسم، العنوان، المساحة، الارتفاع). أي خطأ يجب الإبلاغ عنه فوراً.'
			},
			{
				id: 'affichage-permis',
				titleFr: 'Affichage obligatoire du permis sur le chantier',
				titleAr: 'تعليق الرخصة إجبارياً بالورش',
				descriptionFr:
					"Affichez le permis de construire de manière visible sur le terrain/chantier. C'est une obligation légale qui permet aux services de contrôle et aux voisins de vérifier la conformité des travaux.",
				descriptionAr:
					'علّق رخصة البناء بشكل واضح في الأرض/الورش. هذا التزام قانوني يمكّن مصالح المراقبة والجيران من التحقق من مطابقة الأشغال.',
				tips: "Utilisez un panneau résistant aux intempéries. Le panneau doit mentionner : numéro du permis, nom du propriétaire, nom de l'architecte, surface et hauteur autorisées.",
				tipsAr: 'استعمل لوحة مقاومة للعوامل الجوية. يجب أن تذكر اللوحة: رقم الرخصة، اسم المالك، اسم المهندس المعماري، المساحة والارتفاع المرخصين.'
			}
		]
	},
	{
		id: 'preparation-chantier',
		emoji: '⚙️',
		titleFr: 'Préparation du Chantier',
		titleAr: 'تهيئة الموقع',
		steps: [
			{
				id: 'selection-entrepreneur',
				titleFr: "Sélection de l'entrepreneur général",
				titleAr: 'اختيار المقاول العام',
				descriptionFr:
					"Lancez un appel d'offres auprès de plusieurs entrepreneurs. Comparez les devis détaillés (bordereau de prix unitaires) et vérifiez les références de chaque entreprise.",
				descriptionAr:
					'أطلق طلب عروض لدى عدة مقاولين. قارن العروض المفصلة (جدول الأثمان الأحادية) وتحقق من مراجع كل مقاولة.',
				estimatedDuration: '2–4 semaines',
				estimatedDurationAr: '2–4 أسابيع',
				tips: "Demandez au moins 3 devis. Privilégiez les entrepreneurs ayant des réalisations similaires dans votre zone. Votre architecte peut vous recommander des entreprises.",
				tipsAr: 'اطلب 3 عروض أسعار على الأقل. فضّل المقاولين الذين لديهم مشاريع مماثلة في منطقتك. يمكن لمهندسك المعماري أن يوصي بمقاولات.'
			},
			{
				id: 'contrat-construction',
				titleFr: 'Signature du contrat de construction',
				titleAr: 'توقيع عقد البناء',
				descriptionFr:
					"Signez un contrat détaillé avec l'entrepreneur incluant : bordereau de prix, planning des travaux, pénalités de retard, modalités de paiement (par tranches liées à l'avancement), et garanties.",
				descriptionAr:
					'وقّع عقداً مفصلاً مع المقاول يتضمن: جدول الأثمان، برنامج الأشغال، غرامات التأخير، طريقة الأداء (بأقساط مرتبطة بالتقدم)، والضمانات.',
				documents: [
					'Contrat signé par les deux parties',
					'Bordereau de prix unitaires',
					'Planning prévisionnel des travaux',
					'Attestation d\'assurance de l\'entrepreneur'
				],
				documentsAr: [
					'العقد الموقع من الطرفين',
					'جدول الأثمان الأحادية',
					'البرنامج التوقعي للأشغال',
					'شهادة تأمين المقاول'
				],
				tips: "Ne payez jamais la totalité d'avance. Prévoyez un paiement par tranches (ex: 30% au démarrage, 30% au gros-œuvre, 30% aux finitions, 10% à la réception).",
				tipsAr: 'لا تدفع أبداً المبلغ كاملاً مقدماً. خطط للأداء بأقساط (مثلاً: 30% عند الانطلاق، 30% عند الهيكل، 30% عند التشطيبات، 10% عند التسلم).'
			},
			{
				id: 'declaration-ouverture-chantier',
				titleFr: "Déclaration d'ouverture de chantier",
				titleAr: 'التصريح بفتح الورش',
				descriptionFr:
					"Déposez une déclaration d'ouverture de chantier auprès de la commune. Cette formalité est obligatoire et doit être faite avant le début effectif des travaux.",
				descriptionAr:
					'أودع تصريحاً بفتح الورش لدى الجماعة. هذا الإجراء إلزامي ويجب القيام به قبل البدء الفعلي للأشغال.',
				documents: ['Copie du permis de construire', "Formulaire de déclaration d'ouverture"],
				documentsAr: ['نسخة من رخصة البناء', 'استمارة التصريح بالفتح'],
				estimatedDuration: '1–3 jours',
				estimatedDurationAr: '1–3 أيام'
			},
			{
				id: 'installation-chantier',
				titleFr: 'Installation de chantier',
				titleAr: 'تجهيز الورش',
				descriptionFr:
					"Préparez le terrain pour les travaux : clôture de chantier, raccordement eau et électricité provisoire, installation de la base vie (stockage matériaux, vestiaires ouvriers).",
				descriptionAr:
					'جهّز الأرض للأشغال: سياج الورش، توصيلة مؤقتة للماء والكهرباء، تجهيز قاعدة الحياة (تخزين المواد، غرف تغيير الملابس).',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع',
				tips: "La clôture de chantier est obligatoire pour des raisons de sécurité. Prévoyez un accès suffisant pour les camions de livraison.",
				tipsAr: 'سياج الورش إلزامي لأسباب أمنية. وفّر ممراً كافياً لشاحنات التوصيل.'
			},
			{
				id: 'declaration-cnss',
				titleFr: 'Déclaration CNSS des ouvriers',
				titleAr: 'التصريح بالعمال لدى الصندوق الوطني للضمان الاجتماعي',
				descriptionFr:
					"Si vous employez directement des ouvriers, déclarez-les à la CNSS. L'entrepreneur est normalement responsable de cette obligation pour ses propres employés.",
				descriptionAr:
					'إذا كنت توظف عمالاً مباشرة، صرّح بهم لدى الصندوق الوطني للضمان الاجتماعي. المقاول مسؤول عادةً عن هذا الالتزام بالنسبة لموظفيه.',
				isOptional: true,
				tips: "Vérifiez que votre entrepreneur est bien en règle avec la CNSS. Demandez les attestations.",
				tipsAr: 'تحقق أن مقاولك في وضعية سليمة مع الصندوق الوطني للضمان الاجتماعي. اطلب الشهادات.'
			}
		]
	},
	{
		id: 'construction',
		emoji: '🧱',
		titleFr: 'Construction',
		titleAr: 'البناء',
		steps: [
			{
				id: 'fondations',
				titleFr: 'Fondations et dallage',
				titleAr: 'الأساسات والبلاطة',
				descriptionFr:
					"Phase critique : terrassement du terrain, coulage des semelles de fondation en béton armé, mise en place du hérisson et de la dalle de sol. Respectez scrupuleusement les plans de l'ingénieur structure.",
				descriptionAr:
					'مرحلة حاسمة: حفر الأرض، صب أساسات الخرسانة المسلحة، وضع الحصى والبلاطة الأرضية. التزم بدقة بمخططات مهندس الهيكل.',
				estimatedDuration: '2–4 semaines',
				estimatedDurationAr: '2–4 أسابيع',
				tips: "Faites vérifier le ferraillage par l'ingénieur béton AVANT le coulage. Les fondations sont la base de tout — aucun compromis possible.",
				tipsAr: 'اطلب من مهندس الخرسانة فحص حديد التسليح قبل الصب. الأساسات هي قاعدة كل شيء — لا مجال للتهاون.'
			},
			{
				id: 'elevation-murs',
				titleFr: 'Élévation des murs (gros œuvre)',
				titleAr: 'بناء الجدران (الهيكل)',
				descriptionFr:
					"Construction des murs porteurs et des poteaux en béton armé selon les plans. Utilisez des matériaux conformes aux normes marocaines (parpaings, briques).",
				descriptionAr:
					'بناء الجدران الحاملة والأعمدة بالخرسانة المسلحة حسب المخططات. استعمل مواد مطابقة للمعايير المغربية.',
				estimatedDuration: '3–6 semaines par niveau',
				estimatedDurationAr: '3–6 أسابيع لكل طابق'
			},
			{
				id: 'planchers-dalles',
				titleFr: 'Planchers et dalles intermédiaires',
				titleAr: 'البلاطات الوسيطة',
				descriptionFr:
					"Réalisation des planchers (dalles en corps creux ou dalles pleines en béton armé) pour chaque niveau. Chaque coulage nécessite une inspection préalable.",
				descriptionAr:
					'إنجاز البلاطات (بلاطات مفرغة أو بلاطات مصمتة من الخرسانة المسلحة) لكل طابق. كل عملية صب تتطلب فحصاً مسبقاً.',
				estimatedDuration: '1–2 semaines par niveau',
				estimatedDurationAr: '1–2 أسابيع لكل طابق',
				tips: "Respectez le temps de séchage (28 jours pour résistance nominale). Ne chargez pas les dalles trop tôt.",
				tipsAr: 'احترم مدة الجفاف (28 يوماً للمقاومة الاسمية). لا تحمّل البلاطات مبكراً.'
			},
			{
				id: 'charpente-toiture',
				titleFr: 'Charpente et toiture',
				titleAr: 'السقف والتسقيف',
				descriptionFr:
					"Réalisez la toiture selon les plans : terrasse accessible (étanchéité + forme de pente) ou toiture en tuiles. L'étanchéité est primordiale au Maroc.",
				descriptionAr:
					'أنجز السقف حسب المخططات: سطح قابل للاستعمال (عزل مائي + ميل) أو سقف بالقرميد. العزل المائي أساسي في المغرب.',
				estimatedDuration: '1–3 semaines',
				estimatedDurationAr: '1–3 أسابيع',
				tips: "Investissez dans une bonne étanchéité de terrasse. Les infiltrations sont le problème n°1 des maisons au Maroc.",
				tipsAr: 'استثمر في عزل مائي جيد للسطح. التسربات هي المشكل الأول للمنازل في المغرب.'
			},
			{
				id: 'cloisonnement',
				titleFr: 'Cloisonnement intérieur',
				titleAr: 'التقسيم الداخلي',
				descriptionFr:
					"Montage des cloisons intérieures pour séparer les pièces selon les plans. Utilisez des briques légères ou du plâtre.",
				descriptionAr:
					'بناء الحواجز الداخلية لفصل الغرف حسب المخططات. استعمل الطوب الخفيف أو الجبس.',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع'
			},
			{
				id: 'menuiseries-exterieures',
				titleFr: 'Menuiseries extérieures',
				titleAr: 'النجارة الخارجية',
				descriptionFr:
					"Installation des fenêtres, portes-fenêtres et porte d'entrée. Choix entre aluminium, PVC ou bois selon le budget et le style souhaité.",
				descriptionAr:
					'تركيب النوافذ والأبواب النوافذ والباب الرئيسي. الاختيار بين الألمنيوم أو PVC أو الخشب حسب الميزانية والأسلوب المطلوب.',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع',
				tips: "Privilégiez le double vitrage pour l'isolation thermique et phonique, surtout dans les régions chaudes ou bruyantes.",
				tipsAr: 'فضّل الزجاج المزدوج للعزل الحراري والصوتي، خاصة في المناطق الحارة أو الصاخبة.'
			},
			{
				id: 'enduit-crepissage',
				titleFr: 'Enduit et crépissage extérieur',
				titleAr: 'الطلاء الخارجي',
				descriptionFr:
					"Application de l'enduit extérieur sur les murs (monocouche ou traditionnel). Protège la structure et donne l'aspect final de la façade.",
				descriptionAr:
					'تطبيق الطلاء الخارجي على الجدران. يحمي الهيكل ويعطي المظهر النهائي للواجهة.',
				estimatedDuration: '1–3 semaines',
				estimatedDurationAr: '1–3 أسابيع'
			},
			{
				id: 'plomberie',
				titleFr: 'Plomberie',
				titleAr: 'السباكة',
				descriptionFr:
					"Installation des canalisations d'eau (colonnes montantes, distribution) et d'évacuation (eaux usées, eaux pluviales). Respectez les normes et prévoyez les regards de visite.",
				descriptionAr:
					'تركيب قنوات الماء (الأعمدة الصاعدة، التوزيع) والصرف (المياه المستعملة، مياه الأمطار). احترم المعايير ووفّر غرف التفتيش.',
				estimatedDuration: '2–3 semaines',
				estimatedDurationAr: '2–3 أسابيع',
				tips: "Faites un test de pression avant de fermer les murs. Documentez le passage des canalisations (photos) pour la maintenance future.",
				tipsAr: 'قم باختبار الضغط قبل إغلاق الجدران. وثّق مسارات الأنابيب (صور) للصيانة المستقبلية.'
			},
			{
				id: 'electricite',
				titleFr: 'Électricité',
				titleAr: 'الكهرباء',
				descriptionFr:
					"Installation du tableau électrique, câblage, prises et interrupteurs selon les plans et les normes. Prévoyez suffisamment de circuits et de prises pour chaque pièce.",
				descriptionAr:
					'تركيب اللوحة الكهربائية، الأسلاك، المقابس والمفاتيح حسب المخططات والمعايير. وفّر دوائر ومقابس كافية لكل غرفة.',
				estimatedDuration: '2–3 semaines',
				estimatedDurationAr: '2–3 أسابيع',
				tips: "Prévoyez plus de prises que vous ne pensez en avoir besoin. Ajoutez des gaines vides pour le câblage réseau/fibre optique futur.",
				tipsAr: 'وفّر مقابس أكثر مما تظن أنك تحتاج. أضف قنوات فارغة للتوصيل الشبكي/الألياف البصرية مستقبلاً.'
			},
			{
				id: 'carrelage-revetements',
				titleFr: 'Carrelage et revêtements',
				titleAr: 'البلاط والتكسية',
				descriptionFr:
					"Pose du carrelage au sol et de la faïence murale dans les pièces d'eau (cuisine, salles de bain). Choix des matériaux selon le budget et le style.",
				descriptionAr:
					'وضع البلاط الأرضي والخزف الجداري في غرف الماء (المطبخ، الحمامات). اختيار المواد حسب الميزانية والأسلوب.',
				estimatedDuration: '2–4 semaines',
				estimatedDurationAr: '2–4 أسابيع',
				tips: "Commandez 10–15% de carrelage en plus pour les coupes et les remplacements futurs. Gardez des carreaux de réserve.",
				tipsAr: 'اطلب 10–15% زيادة من البلاط للقطع والاستبدال المستقبلي. احتفظ ببلاط احتياطي.'
			},
			{
				id: 'menuiseries-interieures',
				titleFr: 'Menuiseries intérieures',
				titleAr: 'النجارة الداخلية',
				descriptionFr:
					"Installation des portes intérieures, placards intégrés, et éventuellement des escaliers en bois. Finitions de qualité pour le confort quotidien.",
				descriptionAr:
					'تركيب الأبواب الداخلية، الخزائن المدمجة، وربما السلالم الخشبية. تشطيبات جيدة للراحة اليومية.',
				estimatedDuration: '1–3 semaines',
				estimatedDurationAr: '1–3 أسابيع'
			},
			{
				id: 'peinture-finitions',
				titleFr: 'Peinture et finitions',
				titleAr: 'الطلاء والتشطيبات',
				descriptionFr:
					"Peinture intérieure de toutes les pièces (sous-couche + 2 couches minimum). Finitions : plinthes, joints silicone, petits ajustements.",
				descriptionAr:
					'طلاء داخلي لجميع الغرف (طبقة أساسية + طبقتان كحد أدنى). تشطيبات: حواف، مفاصل سيليكون، تعديلات صغيرة.',
				estimatedDuration: '1–3 semaines',
				estimatedDurationAr: '1–3 أسابيع',
				tips: "Choisissez des peintures lavables pour les pièces à fort passage (couloir, salon, cuisine).",
				tipsAr: 'اختر دهانات قابلة للغسل للغرف ذات المرور الكثيف (الممر، الصالون، المطبخ).'
			}
		]
	},
	{
		id: 'raccordements',
		emoji: '🔌',
		titleFr: 'Raccordements aux Réseaux',
		titleAr: 'التوصيلات',
		steps: [
			{
				id: 'raccordement-eau',
				titleFr: 'Raccordement eau potable',
				titleAr: 'توصيل الماء الصالح للشرب',
				descriptionFr:
					"Déposez une demande de raccordement au réseau d'eau potable auprès de l'ONEE ou de la régie locale de distribution d'eau de votre ville.",
				descriptionAr:
					'أودع طلب توصيل بشبكة الماء الصالح للشرب لدى المكتب الوطني للكهرباء والماء الصالح للشرب أو الوكالة المحلية لتوزيع الماء في مدينتك.',
				documents: [
					'Copie du permis de construire',
					'Copie du titre foncier',
					'Copie CIN',
					'Plan de situation'
				],
				documentsAr: ['نسخة من رخصة البناء', 'نسخة من الرسم العقاري', 'نسخة بطاقة التعريف', 'تصميم الموقع'],
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				estimatedCost: '~3 000–8 000 DH',
				estimatedCostAr: '~3,000–8,000 درهم',
				links: [{ label: 'ONEE', url: 'https://www.onee.ma' }]
			},
			{
				id: 'raccordement-electricite',
				titleFr: 'Raccordement électricité',
				titleAr: 'توصيل الكهرباء',
				descriptionFr:
					"Demandez le raccordement au réseau électrique auprès de l'ONEE (branche électricité) ou de la régie locale. Le dossier est similaire à celui de l'eau.",
				descriptionAr:
					'اطلب التوصيل بالشبكة الكهربائية لدى المكتب الوطني للكهرباء والماء (فرع الكهرباء) أو الوكالة المحلية. الملف مشابه لملف الماء.',
				documents: [
					'Copie du permis de construire',
					'Copie du titre foncier',
					'Copie CIN',
					"Attestation de conformité de l'installation électrique"
				],
				documentsAr: [
					'نسخة من رخصة البناء',
					'نسخة من الرسم العقاري',
					'نسخة بطاقة التعريف',
					'شهادة مطابقة التركيب الكهربائي'
				],
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				estimatedCost: '~2 000–6 000 DH',
				estimatedCostAr: '~2,000–6,000 درهم',
				links: [{ label: 'ONEE', url: 'https://www.onee.ma' }]
			},
			{
				id: 'raccordement-assainissement',
				titleFr: 'Raccordement assainissement',
				titleAr: 'توصيل الصرف الصحي',
				descriptionFr:
					"Demandez le raccordement au réseau d'assainissement (eaux usées) auprès de la commune ou de la régie locale. Si le réseau n'existe pas, prévoyez une fosse septique.",
				descriptionAr:
					'اطلب التوصيل بشبكة الصرف الصحي (المياه المستعملة) لدى الجماعة أو الوكالة المحلية. إذا لم تكن الشبكة موجودة، خطط لحفرة صرف صحي.',
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				estimatedCost: '~2 000–5 000 DH',
				estimatedCostAr: '~2,000–5,000 درهم'
			},
			{
				id: 'compteurs-reception',
				titleFr: 'Installation compteurs et réception',
				titleAr: 'تركيب العدادات والاستلام',
				descriptionFr:
					"Installation des compteurs d'eau et d'électricité. Vérification du bon fonctionnement de tous les raccordements. Signature des contrats d'abonnement.",
				descriptionAr:
					'تركيب عدادات الماء والكهرباء. التحقق من حسن عمل جميع التوصيلات. توقيع عقود الاشتراك.',
				estimatedDuration: '1–2 semaines',
				estimatedDurationAr: '1–2 أسابيع'
			}
		]
	},
	{
		id: 'reception-conformite',
		emoji: '✅',
		titleFr: 'Réception et Conformité',
		titleAr: 'التسلم والمطابقة',
		steps: [
			{
				id: 'inspection-finale',
				titleFr: "Inspection finale avec l'architecte",
				titleAr: 'المعاينة النهائية مع المهندس المعماري',
				descriptionFr:
					"Réalisez une visite complète de la construction avec votre architecte. Établissez un procès-verbal listant tous les défauts et malfaçons à corriger (réserves).",
				descriptionAr:
					'قم بزيارة شاملة للبناء مع مهندسك المعماري. حرر محضراً يسرد جميع العيوب والأخطاء التي يجب تصحيحها (التحفظات).',
				tips: "Soyez méticuleux. Vérifiez chaque pièce : ouvertures, fermetures, prises, robinets, revêtements. Prenez des photos.",
				tipsAr: 'كن دقيقاً. افحص كل غرفة: الفتحات، الإغلاقات، المقابس، الحنفيات، التكسية. التقط صوراً.'
			},
			{
				id: 'levee-reserves',
				titleFr: 'Levée des réserves',
				titleAr: 'رفع التحفظات',
				descriptionFr:
					"L'entrepreneur corrige tous les défauts listés dans le procès-verbal. Une nouvelle inspection vérifie que les corrections sont satisfaisantes.",
				descriptionAr:
					'يصحح المقاول جميع العيوب المسجلة في المحضر. معاينة جديدة تتحقق من أن التصحيحات مرضية.',
				estimatedDuration: '1–4 semaines',
				estimatedDurationAr: '1–4 أسابيع',
				tips: "Ne payez pas le solde final tant que toutes les réserves ne sont pas levées.",
				tipsAr: 'لا تدفع الرصيد الأخير حتى يتم رفع جميع التحفظات.'
			},
			{
				id: 'dossier-fin-travaux',
				titleFr: 'Dossier de fin de travaux',
				titleAr: 'ملف نهاية الأشغال',
				descriptionFr:
					"L'architecte prépare le dossier de fin de travaux comprenant : les plans de récolement (conformes à l'exécution), l'attestation de conformité, et le certificat d'achèvement des travaux.",
				descriptionAr:
					'يُعد المهندس المعماري ملف نهاية الأشغال الذي يتضمن: مخططات المطابقة (مطابقة للتنفيذ)، شهادة المطابقة، وشهادة إتمام الأشغال.',
				documents: [
					'Plans de récolement',
					"Attestation de conformité de l'architecte",
					'Certificat d\'achèvement des travaux'
				],
				documentsAr: ['مخططات المطابقة', 'شهادة مطابقة المهندس المعماري', 'شهادة إتمام الأشغال']
			},
			{
				id: 'demande-permis-habiter',
				titleFr: "Demande du Permis d'Habiter",
				titleAr: 'طلب رخصة السكن',
				descriptionFr:
					"Déposez une demande de Permis d'Habiter (رخصة السكن) auprès de la commune, accompagnée du dossier de fin de travaux et de l'attestation de conformité de l'architecte.",
				descriptionAr:
					'أودع طلب رخصة السكن لدى الجماعة، مرفقاً بملف نهاية الأشغال وشهادة مطابقة المهندس المعماري.',
				documents: [
					"Demande de permis d'habiter",
					'Dossier de fin de travaux',
					"Attestation de conformité de l'architecte",
					'Copie du permis de construire'
				],
				documentsAr: [
					'طلب رخصة السكن',
					'ملف نهاية الأشغال',
					'شهادة مطابقة المهندس المعماري',
					'نسخة من رخصة البناء'
				],
				links: [
					{
						label: 'Portail e-Rkhssa',
						url: 'https://www.erkhssa.ma'
					}
				]
			},
			{
				id: 'visite-conformite',
				titleFr: 'Visite de conformité',
				titleAr: 'زيارة المطابقة',
				descriptionFr:
					"Les services techniques de la commune effectuent une visite pour vérifier que la construction est conforme au permis de construire (surface, hauteur, implantation, façades).",
				descriptionAr:
					'تقوم المصالح التقنية للجماعة بزيارة للتحقق من أن البناء مطابق لرخصة البناء (المساحة، الارتفاع، التموضع، الواجهات).',
				estimatedDuration: '2–4 semaines après la demande',
				estimatedDurationAr: '2–4 أسابيع بعد الطلب',
				tips: "Toute non-conformité (étage supplémentaire, dépassement de surface) peut entraîner un refus du permis d'habiter et des sanctions.",
				tipsAr: 'أي عدم مطابقة (طابق إضافي، تجاوز المساحة) قد يؤدي إلى رفض رخصة السكن وعقوبات.'
			},
			{
				id: 'obtention-permis-habiter',
				titleFr: "Obtention du Permis d'Habiter",
				titleAr: 'الحصول على رخصة السكن',
				descriptionFr:
					"Si la visite de conformité est concluante, la commune délivre le Permis d'Habiter. Ce document est indispensable pour habiter légalement le bien et pour les raccordements définitifs.",
				descriptionAr:
					'إذا كانت زيارة المطابقة إيجابية، تسلم الجماعة رخصة السكن. هذه الوثيقة ضرورية للسكن القانوني في العقار وللتوصيلات النهائية.',
				tips: "Le permis d'habiter est obligatoire pour obtenir les contrats d'eau et d'électricité définitifs.",
				tipsAr: 'رخصة السكن إلزامية للحصول على عقود الماء والكهرباء النهائية.'
			},
			{
				id: 'mise-a-jour-tf',
				titleFr: 'Mise à jour du titre foncier',
				titleAr: 'تحديث الرسم العقاري',
				descriptionFr:
					"Faites inscrire la construction sur le titre foncier auprès de la Conservation Foncière. Cette inscription mentionne la nature et les caractéristiques de la construction.",
				descriptionAr:
					'قيّد البناء بالرسم العقاري لدى المحافظة العقارية. هذا التقييد يذكر طبيعة وخصائص البناء.',
				documents: [
					"Permis d'habiter",
					"Plans de récolement",
					"Attestation de l'architecte"
				],
				documentsAr: ['رخصة السكن', 'مخططات المطابقة', 'شهادة المهندس المعماري'],
				estimatedDuration: '2–6 semaines',
				estimatedDurationAr: '2–6 أسابيع',
				links: [
					{
						label: 'ANCFCC',
						url: 'https://www.ancfcc.gov.ma'
					}
				]
			}
		]
	},
	{
		id: 'apres-construction',
		emoji: '🏠',
		titleFr: 'Après Construction',
		titleAr: 'ما بعد البناء',
		steps: [
			{
				id: 'assurance-habitation',
				titleFr: 'Assurance multirisque habitation',
				titleAr: 'تأمين السكن الشامل',
				descriptionFr:
					"Souscrivez une assurance multirisque habitation couvrant les risques principaux : incendie, dégâts des eaux, vol, responsabilité civile.",
				descriptionAr:
					'اكتتب في تأمين شامل للسكن يغطي المخاطر الرئيسية: الحريق، أضرار المياه، السرقة، المسؤولية المدنية.',
				isOptional: true,
				tips: "Comparez les offres de plusieurs compagnies. L'assurance n'est pas obligatoire mais fortement recommandée.",
				tipsAr: 'قارن عروض عدة شركات. التأمين ليس إلزامياً لكنه موصى به بشدة.'
			},
			{
				id: 'contrat-entretien',
				titleFr: 'Contrat d\'entretien',
				titleAr: 'عقد الصيانة',
				descriptionFr:
					"Mettez en place des contrats d'entretien pour les équipements nécessitant un suivi régulier : chauffe-eau, climatisation, chaudière, ascenseur le cas échéant.",
				descriptionAr:
					'أبرم عقود صيانة للتجهيزات التي تحتاج متابعة منتظمة: سخان الماء، المكيف، المرجل، المصعد إن وُجد.',
				isOptional: true
			},
			{
				id: 'entretien-annuel',
				titleFr: 'Entretien annuel',
				titleAr: 'الصيانة السنوية',
				descriptionFr:
					"Planifiez l'entretien annuel de votre maison : vérification de l'étanchéité de la terrasse, nettoyage des façades, contrôle des réseaux (plomberie, électricité), entretien des menuiseries.",
				descriptionAr:
					'خطط للصيانة السنوية لمنزلك: فحص عزل السطح، تنظيف الواجهات، مراقبة الشبكات (السباكة، الكهرباء)، صيانة النجارة.',
				isOptional: true,
				tips: "Un bon entretien préventif évite les réparations coûteuses. Vérifiez l'étanchéité de la terrasse avant chaque saison de pluies.",
				tipsAr: 'الصيانة الوقائية الجيدة تجنب الإصلاحات المكلفة. افحص عزل السطح قبل كل موسم أمطار.'
			},
			{
				id: 'declaration-commune',
				titleFr: 'Déclaration à la commune',
				titleAr: 'التصريح للجماعة',
				descriptionFr:
					"Déclarez votre bien auprès de la commune pour la taxe de services communaux (ex-taxe d'édilité) et la taxe d'habitation. Ces taxes sont annuelles.",
				descriptionAr:
					'صرّح بعقارك لدى الجماعة لرسم الخدمات الجماعية (رسم النظافة سابقاً) ورسم السكن. هذه الرسوم سنوية.',
				isOptional: true,
				tips: "Les 5 premières années suivant l'achèvement de la construction, vous bénéficiez d'une exonération de la taxe d'habitation pour votre résidence principale.",
				tipsAr: 'في الخمس سنوات الأولى بعد إتمام البناء، تستفيد من إعفاء من رسم السكن لسكنك الرئيسي.'
			}
		]
	}
];
