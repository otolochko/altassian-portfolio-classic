export const locales = ["en", "uk"] as const;

export type Locale = (typeof locales)[number];

export type ContactRequest = {
  name: string;
  email: string;
  message: string;
  locale: Locale;
  submissionId: string;
  website: string;
  startedAt: number;
};

type Certification = {
  title: string;
  code?: string;
  href?: string;
};

type CaseStudy = {
  number: string;
  sector: string;
  title: string;
  context: string;
  intervention: string;
  outcomes: readonly string[];
  metric?: {
    value: string;
    label: string;
  };
  tags: readonly string[];
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    work: string;
    expertise: string;
    credentials: string;
    about: string;
    contact: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
    switchLanguage: string;
    switchTheme: string;
    primaryNavigation: string;
    mobileNavigation: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    availability: string;
    system: {
      label: string;
      interactiveLabel: string;
      sourcesLabel: string;
      coreLabel: string;
      outcomesLabel: string;
      flowStart: string;
      flowProcess: string;
      flowOutcome: string;
      products: readonly {
        name: string;
        sources: readonly string[];
        outcomes: readonly string[];
      }[];
    };
  };
  credibility: readonly {
    value: string;
    label: string;
  }[];
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    contextLabel: string;
    interventionLabel: string;
    outcomeLabel: string;
    items: readonly CaseStudy[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    intro: string;
    startingPointsLabel: string;
    startingPoints: readonly string[];
    capabilities: readonly {
      index: string;
      title: string;
      description: string;
      items: readonly string[];
    }[];
    engagementEyebrow: string;
    engagementTitle: string;
    engagementIntro: string;
    engagements: readonly {
      index: string;
      title: string;
      description: string;
    }[];
  };
  credentials: {
    eyebrow: string;
    title: string;
    intro: string;
    certificationsLabel: string;
    verifyLabel: string;
    certifications: readonly Certification[];
    toolkitLabel: string;
    toolkit: readonly {
      category: string;
      items: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: readonly string[];
    principles: readonly {
      title: string;
      description: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    directLabel: string;
    communityLabel: string;
    linkedinLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      messageHint: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      validation: string;
      emailValidation: string;
    };
  };
  footer: {
    line: string;
    backToTop: string;
  };
};

export const content: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: "Oleksandr Tolochko — Atlassian Certified Expert",
      description:
        "Independent Atlassian consultant designing operable Jira, JSM, Confluence, Assets, automation, and governance systems.",
      ogTitle: "Atlassian systems that stay useful as teams scale.",
      ogDescription:
        "Oleksandr Tolochko designs and improves Atlassian systems for enterprise delivery, ITSM, governance, and automation.",
    },
    nav: {
      work: "Work",
      expertise: "Expertise",
      credentials: "Credentials",
      about: "About",
      contact: "Contact",
      cta: "Start a conversation",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      switchLanguage: "Switch language",
      switchTheme: "Switch color theme",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
    },
    hero: {
      eyebrow: "Oleksandr Tolochko · Atlassian Certified Expert",
      titleLead: "I design Atlassian systems that",
      titleAccent: "stay useful as teams scale.",
      summary:
        "I turn Jira, JSM, Confluence, and Assets into an operating system for delivery — with clearer ownership, less manual work, and reporting leaders can trust.",
      primaryCta: "See selected work",
      secondaryCta: "Start a conversation",
      availability: "Independent consulting · Europe / remote",
      system: {
        label: "A system of work, not a collection of tools",
        interactiveLabel: "Interactive model",
        sourcesLabel: "Work enters",
        coreLabel: "System",
        outcomesLabel: "Work improves",
        flowStart: "Input",
        flowProcess: "Govern · Automate · Report",
        flowOutcome: "Outcome",
        products: [
          {
            name: "Jira",
            sources: ["Software delivery", "Portfolio planning", "Cross-team work"],
            outcomes: ["Standard workflows", "Delivery visibility", "Clear ownership"],
          },
          {
            name: "JSM",
            sources: ["Service requests", "Incidents & alerts", "Change requests"],
            outcomes: ["SLA visibility", "Faster response", "Better self-service"],
          },
          {
            name: "Confluence",
            sources: ["Team knowledge", "Policies & standards", "Project decisions"],
            outcomes: ["Shared context", "Searchable knowledge", "Fewer handoffs"],
          },
          {
            name: "Assets",
            sources: ["Infrastructure", "Services & dependencies", "Ownership data"],
            outcomes: ["Trusted inventory", "Impact visibility", "Cleaner operations"],
          },
        ],
      },
    },
    credibility: [
      { value: "8+", label: "years of hands-on delivery" },
      { value: "ACE", label: "Atlassian Certified Expert" },
      { value: "Cloud + DC", label: "platform experience" },
      { value: "Enterprise", label: "security and governance focus" },
    ],
    work: {
      eyebrow: "Selected work",
      title: "Complex systems, made operable.",
      intro:
        "A selection of anonymized engagements across regulated, service, and multi-team environments. The details are intentionally concise; the outcomes are not embellished.",
      contextLabel: "Context",
      interventionLabel: "Intervention",
      outcomeLabel: "Outcome",
      items: [
        {
          number: "01",
          sector: "Banking · Security & compliance",
          title: "Atlassian security audit and platform hardening",
          context:
            "A major bank needed a deep review of its Atlassian infrastructure, permission model, and performance under high load.",
          intervention:
            "Reviewed access paths and configuration, redesigned the permission model, and aligned platform controls with GDPR and ISO-style requirements.",
          outcomes: [
            "Permission model redesigned",
            "Audit-ready controls improved",
            "Compliance readiness supported",
          ],
          tags: ["Security", "Permissions", "Governance"],
        },
        {
          number: "02",
          sector: "Telecom · ITSM operations",
          title: "L1–L3 support model optimization",
          context:
            "A global provider needed one coherent service desk across support tiers, with faster routing and fewer missed commitments.",
          intervention:
            "Restructured queues, escalation paths, request fulfillment, SLAs, and the 24/7 on-call process in Jira Service Management.",
          outcomes: [
            "Escalation flow redesigned",
            "On-call process improved",
            "Request fulfillment automated",
          ],
          metric: {
            value: "~40%",
            label: "reduction in MTTR in this engagement",
          },
          tags: ["JSM", "SLA", "On-call"],
        },
        {
          number: "03",
          sector: "MSP · Multi-client operations",
          title: "Multi-tenant service management architecture",
          context:
            "An IT service provider needed to support multiple external clients inside one Atlassian environment without compromising data separation.",
          intervention:
            "Designed the tenant model, client access boundaries, governance rules, and automated reporting paths for service and billing operations.",
          outcomes: [
            "Client data segregation improved",
            "Billing reports automated",
            "Governance model standardized",
          ],
          tags: ["Multi-tenancy", "JSM", "Tempo"],
        },
        {
          number: "04",
          sector: "Enterprise · Migration & governance",
          title: "Jira consolidation and workflow unification",
          context:
            "Multiple Jira Cloud and Data Center environments had diverged in workflows, ownership, and operating standards.",
          intervention:
            "Planned the target architecture, consolidated environments, normalized global workflows, and introduced a shared governance model.",
          outcomes: [
            "Global workflows standardized",
            "License usage optimized",
            "A single operating model established",
          ],
          metric: {
            value: "20+",
            label: "instances consolidated",
          },
          tags: ["Migration", "Data Center", "Governance"],
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Configure less. Make the system operable.",
      intro:
        "The work sits between platform architecture and day-to-day operations. The objective is not more Jira — it is a clearer way for teams to work.",
      startingPointsLabel: "Typical starting points",
      startingPoints: [
        "Inconsistent workflows and ownership",
        "Slow support and missed SLAs",
        "Disconnected tools and data",
        "Low management visibility",
        "Security or compliance gaps",
        "Uncontrolled license spend",
      ],
      capabilities: [
        {
          index: "01",
          title: "ITSM & operations",
          description:
            "Service experiences that are usable for customers, agents, and the teams behind them.",
          items: [
            "Incident, change, and request management",
            "JSM portals, queues, SLAs, and on-call",
            "Assets / CMDB and knowledge enablement",
          ],
        },
        {
          index: "02",
          title: "Governance & security",
          description:
            "Guardrails that protect the platform without turning every change into a bottleneck.",
          items: [
            "Permission and access models",
            "Atlassian Guard, SSO, and SCIM",
            "Standards, ownership, and audit readiness",
          ],
        },
        {
          index: "03",
          title: "Delivery & planning",
          description:
            "A connected view from team execution to portfolio decisions and release readiness.",
          items: [
            "Software delivery and DevOps integrations",
            "Advanced Roadmaps and resource planning",
            "Reporting built around decisions, not ticket counts",
          ],
        },
        {
          index: "04",
          title: "Automation & integration",
          description:
            "Targeted automation that removes repeat work and keeps data moving between systems.",
          items: [
            "Automation for Jira and ScriptRunner",
            "REST APIs, webhooks, Forge, and OAuth",
            "CRM, CI/CD, and collaboration integrations",
          ],
        },
      ],
      engagementEyebrow: "Ways to work together",
      engagementTitle: "Start with the level of certainty you need.",
      engagementIntro:
        "From a focused review to a full platform redesign, each engagement is scoped around a concrete decision or operational outcome.",
      engagements: [
        {
          index: "01",
          title: "Platform consulting",
          description:
            "Practical configuration improvements, administration support, and workshops for teams that need momentum without a large transformation.",
        },
        {
          index: "02",
          title: "Technical assessment",
          description:
            "A structured review of performance, security, architecture, licensing, and migration risk with prioritized recommendations.",
        },
        {
          index: "03",
          title: "Proof of value",
          description:
            "A contained pilot that tests the operating model and demonstrates value before a broader rollout.",
        },
        {
          index: "04",
          title: "Custom delivery",
          description:
            "End-to-end implementation, automation, Forge extensions, and integrations for requirements that standard configuration cannot cover.",
        },
      ],
    },
    credentials: {
      eyebrow: "Credentials",
      title: "Certified depth, practical range.",
      intro:
        "Certifications establish the baseline. The more useful signal is applying them across governance, service management, delivery, and integration work.",
      certificationsLabel: "Atlassian certifications",
      verifyLabel: "Verify",
      certifications: [
        {
          title: "Atlassian Cloud Organization Admin",
          code: "ACP-520",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=52&date=2023-8-25",
        },
        {
          title: "Jira Administrator for Cloud",
          code: "ACP-120",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=26&date=2021-12-23",
        },
        {
          title: "Managing Jira Projects for Cloud",
          code: "ACP-620",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=30&date=2021-9-13",
        },
        {
          title: "Issue Security in Jira",
          code: "ASB-152",
          href: "https://cp.certmetrics.com/atlassian/en/public/transcript/HNCM16CKKMV41MSG",
        },
        { title: "Agile in Jira" },
        { title: "ITSM with Jira Service Management Foundations" },
      ],
      toolkitLabel: "Working toolkit",
      toolkit: [
        {
          category: "Automation",
          items: "Automation for Jira · ScriptRunner / Groovy · Python · Power Automate",
        },
        {
          category: "Integration",
          items: "REST API · Webhooks · Forge · OAuth",
        },
        {
          category: "Advanced apps",
          items: "Assets · EazyBI · Xray · Tempo",
        },
        {
          category: "Identity & infrastructure",
          items: "Atlassian Guard · SSO / SCIM · AWS / Azure fundamentals",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Systems should make ownership obvious.",
      body: [
        "I work across the full Atlassian lifecycle: organization administration, access, project architecture, Jira Service Management, Confluence, Assets, automation, and reporting.",
        "My focus is the operating model behind the configuration — fewer manual steps, cleaner data, lower license waste, and a platform teams can maintain after the engagement ends.",
      ],
      principles: [
        {
          title: "Outcomes over activity",
          description:
            "Success is measured in response time, clarity, adoption, and decisions — not the number of workflows created.",
        },
        {
          title: "Safe change",
          description:
            "Architecture, permissions, and migrations are approached with explicit constraints and a controlled path to rollout.",
        },
        {
          title: "Maintainable by design",
          description:
            "The best system is one internal teams understand, own, and can continue improving.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an Atlassian system that needs untangling?",
      description:
        "Share the current situation, the decision you need to make, and whether you use Cloud or Data Center. I read every message.",
      directLabel: "Elsewhere",
      communityLabel: "Atlassian Community",
      linkedinLabel: "LinkedIn",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "What needs to change?",
        messagePlaceholder:
          "A little context, your target timeline, and the outcome you need…",
        messageHint: "10–3,000 characters",
        submit: "Send inquiry",
        submitting: "Sending…",
        success: "Thanks — your message is on its way. I’ll get back to you shortly.",
        error: "The message could not be sent. Please try again in a moment.",
        validation: "Please complete all fields before sending.",
        emailValidation: "Enter a valid email address.",
      },
    },
    footer: {
      line: "Independent Atlassian consulting · Europe / remote",
      backToTop: "Back to top",
    },
  },
  uk: {
    meta: {
      title: "Олександр Толочко — Atlassian Certified Expert",
      description:
        "Незалежний консультант з Atlassian: Jira, JSM, Confluence, Assets, автоматизація, безпека та управління платформою.",
      ogTitle: "Системи Atlassian, які залишаються керованими зі зростанням команд.",
      ogDescription:
        "Олександр Толочко проєктує та вдосконалює системи Atlassian для корпоративної розробки, ITSM, управління й автоматизації.",
    },
    nav: {
      work: "Кейси",
      expertise: "Експертиза",
      credentials: "Сертифікації",
      about: "Про мене",
      contact: "Зв’язок",
      cta: "Почати розмову",
      menuOpen: "Відкрити навігацію",
      menuClose: "Закрити навігацію",
      switchLanguage: "Змінити мову",
      switchTheme: "Змінити колірну тему",
      primaryNavigation: "Основна навігація",
      mobileNavigation: "Мобільна навігація",
    },
    hero: {
      eyebrow: "Олександр Толочко · Atlassian Certified Expert",
      titleLead: "Я проєктую системи Atlassian, які",
      titleAccent: "залишаються керованими зі зростанням команд.",
      summary:
        "Об’єдную Jira, JSM, Confluence та Assets у цілісну робочу систему — із чіткою відповідальністю, меншою кількістю ручних дій і звітністю, якій довіряє керівництво.",
      primaryCta: "Переглянути кейси",
      secondaryCta: "Почати розмову",
      availability: "Незалежний консалтинг · Європа / дистанційно",
      system: {
        label: "Єдина система роботи, а не набір окремих інструментів",
        interactiveLabel: "Інтерактивна модель",
        sourcesLabel: "На вході",
        coreLabel: "Система",
        outcomesLabel: "Що змінюється",
        flowStart: "Вхідні дані",
        flowProcess: "Управління · Автоматизація · Звітність",
        flowOutcome: "Результат",
        products: [
          {
            name: "Jira",
            sources: ["Розробка продукту", "Планування портфеля", "Робота між командами"],
            outcomes: [
              "Узгоджені робочі процеси",
              "Прозорість виконання",
              "Чітка відповідальність",
            ],
          },
          {
            name: "JSM",
            sources: ["Звернення до підтримки", "Інциденти й сповіщення", "Запити на зміни"],
            outcomes: ["Контроль SLA", "Швидше реагування", "Зручніше самообслуговування"],
          },
          {
            name: "Confluence",
            sources: ["Командні знання", "Політики й стандарти", "Проєктні рішення"],
            outcomes: [
              "Спільний контекст",
              "Знання, які легко знайти",
              "Менше передач між командами",
            ],
          },
          {
            name: "Assets",
            sources: ["Інфраструктура", "Сервіси й залежності", "Відповідальні особи"],
            outcomes: ["Достовірний облік", "Видимість залежностей", "Впорядковані операції"],
          },
        ],
      },
    },
    credibility: [
      { value: "8+", label: "років практичного досвіду" },
      { value: "ACE", label: "Atlassian Certified Expert" },
      { value: "Cloud + DC", label: "досвід із Cloud і Data Center" },
      { value: "Enterprise", label: "корпоративна безпека й управління" },
    ],
    work: {
      eyebrow: "Вибрані кейси",
      title: "Складні системи, готові до щоденної роботи.",
      intro:
        "Анонімізовані проєкти в регульованих, сервісних і багатокомандних середовищах. Деталі викладено стисло, результати — без прикрас.",
      contextLabel: "Контекст",
      interventionLabel: "Що зроблено",
      outcomeLabel: "Результат",
      items: [
        {
          number: "01",
          sector: "Банківська сфера · Безпека та відповідність вимогам",
          title: "Аудит безпеки та посилення захисту платформи Atlassian",
          context:
            "Великому банку був потрібен глибокий аудит інфраструктури Atlassian, моделі доступу та продуктивності під високим навантаженням.",
          intervention:
            "Перевірив шляхи доступу й налаштування, перепроєктував модель прав доступу та узгодив механізми контролю платформи з вимогами GDPR і практиками на основі ISO.",
          outcomes: [
            "Перебудовано модель прав доступу",
            "Удосконалено механізми контролю для аудиту",
            "Підвищено готовність до перевірок",
          ],
          tags: ["Безпека", "Права доступу", "Управління"],
        },
        {
          number: "02",
          sector: "Телеком · ITSM-операції",
          title: "Оптимізація моделі підтримки L1–L3",
          context:
            "Глобальному провайдеру була потрібна єдина узгоджена служба підтримки для рівнів L1–L3, швидша маршрутизація та менше порушень SLA.",
          intervention:
            "Перебудував черги, шляхи ескалації, виконання запитів, SLA та процес цілодобового чергування в Jira Service Management.",
          outcomes: [
            "Перебудовано шляхи ескалації",
            "Удосконалено процес чергування",
            "Автоматизовано виконання запитів",
          ],
          metric: {
            value: "~40%",
            label: "скорочення MTTR у межах проєкту",
          },
          tags: ["JSM", "SLA", "Чергування"],
        },
        {
          number: "03",
          sector: "MSP · Обслуговування багатьох клієнтів",
          title: "Багатоклієнтська архітектура управління сервісами",
          context:
            "Постачальнику ІТ-послуг потрібно було обслуговувати кількох зовнішніх клієнтів у межах одного середовища Atlassian без ризику змішування даних.",
          intervention:
            "Спроєктував модель із розділенням клієнтів, окремі межі доступу, правила управління та автоматизовану звітність для сервісних операцій і виставлення рахунків.",
          outcomes: [
            "Покращено ізоляцію даних",
            "Автоматизовано звіти для виставлення рахунків",
            "Запроваджено єдині правила управління",
          ],
          tags: ["Багатоклієнтська модель", "JSM", "Tempo"],
        },
        {
          number: "04",
          sector: "Корпоративні системи · Міграція та управління",
          title: "Консолідація Jira та уніфікація робочих процесів",
          context:
            "Кілька середовищ Jira Cloud і Data Center відрізнялися робочими процесами, моделями відповідальності та операційними стандартами.",
          intervention:
            "Спланував цільову архітектуру, консолідував середовища, уніфікував глобальні робочі процеси та запровадив спільну модель управління.",
          outcomes: [
            "Стандартизовано глобальні робочі процеси",
            "Оптимізовано використання ліцензій",
            "Створено єдину операційну модель",
          ],
          metric: {
            value: "20+",
            label: "середовищ консолідовано",
          },
          tags: ["Міграція", "Data Center", "Управління"],
        },
      ],
    },
    expertise: {
      eyebrow: "Експертиза",
      title: "Менше налаштувань. Більше керованості.",
      intro:
        "Працюю на перетині архітектури платформи та щоденної роботи команд. Мета — не ускладнювати Jira, а спростити робочі процеси.",
      startingPointsLabel: "Типові точки старту",
      startingPoints: [
        "Неузгоджені робочі процеси й нечітка відповідальність",
        "Повільна підтримка та порушення SLA",
        "Розрізнені інструменти й дані",
        "Недостатня прозорість для керівництва",
        "Прогалини в безпеці або відповідності вимогам",
        "Неконтрольовані витрати на ліцензії",
      ],
      capabilities: [
        {
          index: "01",
          title: "ITSM та операційні процеси",
          description:
            "Сервісна модель, зручна для клієнтів, фахівців підтримки й суміжних команд.",
          items: [
            "Керування інцидентами, змінами та запитами",
            "JSM-портали, черги, SLA та чергування",
            "Assets / CMDB і база знань",
          ],
        },
        {
          index: "02",
          title: "Управління та безпека",
          description:
            "Правила, що захищають платформу, але не перетворюють кожну зміну на вузьке місце.",
          items: [
            "Моделі прав і доступу",
            "Atlassian Guard, SSO та SCIM",
            "Стандарти, відповідальність і готовність до аудиту",
          ],
        },
        {
          index: "03",
          title: "Розробка та планування",
          description:
            "Цілісна картина: від роботи команд до портфельних рішень і готовності до релізу.",
          items: [
            "Розробка ПЗ та інтеграції DevOps",
            "Advanced Roadmaps і ресурсне планування",
            "Звітність для ухвалення рішень, а не підрахунку завдань",
          ],
        },
        {
          index: "04",
          title: "Автоматизація та інтеграції",
          description:
            "Точкова автоматизація, яка усуває повторювану роботу й передає дані між системами.",
          items: [
            "Automation for Jira та ScriptRunner",
            "REST API, вебхуки, Forge та OAuth",
            "Інтеграції з CRM, CI/CD та інструментами спільної роботи",
          ],
        },
      ],
      engagementEyebrow: "Формати співпраці",
      engagementTitle: "Оберіть формат відповідно до ваших потреб.",
      engagementIntro:
        "Від точкового аудиту до повного редизайну платформи — кожен формат має конкретну мету й очікуваний операційний результат.",
      engagements: [
        {
          index: "01",
          title: "Консультації щодо платформи",
          description:
            "Практичне вдосконалення налаштувань, адміністрування та робочі сесії для команд, яким потрібні зміни без масштабної трансформації.",
        },
        {
          index: "02",
          title: "Технічний аудит",
          description:
            "Структурований огляд продуктивності, безпеки, архітектури, ліцензій і міграційних ризиків із пріоритетними рекомендаціями.",
        },
        {
          index: "03",
          title: "Пілотне рішення",
          description:
            "Обмежений за масштабом пілотний проєкт, який дає змогу перевірити операційну модель та оцінити цінність перед повним запуском.",
        },
        {
          index: "04",
          title: "Реалізація під ключ",
          description:
            "Повне впровадження, автоматизація, розширення на Forge та інтеграції для завдань, яких не покривають стандартні налаштування.",
        },
      ],
    },
    credentials: {
      eyebrow: "Сертифікації",
      title: "Сертифікації, підкріплені практикою.",
      intro:
        "Сертифікації підтверджують знання. Важливіше — як я застосовую їх в управлінні платформою, сервісному менеджменті, розробці та інтеграціях.",
      certificationsLabel: "Сертифікати Atlassian",
      verifyLabel: "Перевірити",
      certifications: [
        {
          title: "Atlassian Cloud Organization Admin",
          code: "ACP-520",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=52&date=2023-8-25",
        },
        {
          title: "Jira Administrator for Cloud",
          code: "ACP-120",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=26&date=2021-12-23",
        },
        {
          title: "Managing Jira Projects for Cloud",
          code: "ACP-620",
          href: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=30&date=2021-9-13",
        },
        {
          title: "Issue Security in Jira",
          code: "ASB-152",
          href: "https://cp.certmetrics.com/atlassian/en/public/transcript/HNCM16CKKMV41MSG",
        },
        { title: "Agile in Jira" },
        { title: "ITSM with Jira Service Management Foundations" },
      ],
      toolkitLabel: "Робочий інструментарій",
      toolkit: [
        {
          category: "Автоматизація",
          items: "Automation for Jira · ScriptRunner / Groovy · Python · Power Automate",
        },
        {
          category: "Інтеграції",
          items: "REST API · Вебхуки · Forge · OAuth",
        },
        {
          category: "Розширені застосунки",
          items: "Assets · EazyBI · Xray · Tempo",
        },
        {
          category: "Ідентифікація та інфраструктура",
          items: "Atlassian Guard · SSO / SCIM · основи AWS / Azure",
        },
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Система має чітко показувати, хто за що відповідає.",
      body: [
        "Охоплюю весь життєвий цикл Atlassian: адміністрування організації, керування доступом, архітектуру проєктів, Jira Service Management, Confluence, Assets, автоматизацію та звітність.",
        "Мій фокус — не лише налаштування, а й операційна модель. Результат — менше ручних кроків, упорядковані дані, нижчі витрати на ліцензії та платформа, яку команда може самостійно підтримувати після завершення співпраці.",
      ],
      principles: [
        {
          title: "Результат важливіший за видимість роботи",
          description:
            "Успіх вимірюється швидкістю реагування, прозорістю, реальним використанням системи та якістю рішень, а не кількістю створених робочих процесів.",
        },
        {
          title: "Безпечні зміни",
          description:
            "Архітектура, права доступу й міграції впроваджуються із заздалегідь визначеними обмеженнями, перевірками та контрольованим запуском.",
        },
        {
          title: "Система має бути простою в підтримці",
          description:
            "Найкраща система — та, яку внутрішні команди розуміють, контролюють і можуть розвивати.",
        },
      ],
    },
    contact: {
      eyebrow: "Зв’язок",
      title: "Потрібно розібратися зі складною системою Atlassian?",
      description:
        "Опишіть поточну ситуацію, рішення, яке потрібно ухвалити, і зазначте, чи працюєте ви з Cloud або Data Center. Я читаю кожне повідомлення.",
      directLabel: "Інші канали",
      communityLabel: "Atlassian Community",
      linkedinLabel: "LinkedIn",
      form: {
        name: "Ім’я",
        namePlaceholder: "Ваше ім’я",
        email: "Електронна пошта",
        emailPlaceholder: "you@company.com",
        message: "Що потрібно змінити?",
        messagePlaceholder:
          "Трохи контексту, бажані терміни та результат, якого ви очікуєте…",
        messageHint: "10–3 000 символів",
        submit: "Надіслати запит",
        submitting: "Надсилання…",
        success: "Дякую — повідомлення надіслано. Я відповім найближчим часом.",
        error: "Не вдалося надіслати повідомлення. Спробуйте ще раз за мить.",
        validation: "Заповніть усі поля перед надсиланням.",
        emailValidation: "Вкажіть коректну адресу електронної пошти.",
      },
    },
    footer: {
      line: "Незалежний консалтинг з Atlassian · Європа / дистанційно",
      backToTop: "На початок",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
