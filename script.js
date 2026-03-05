/* =====================================================
   Zane Zhang — Homepage Interactions
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const langSwitch = document.getElementById('langSwitch');

    const translations = {
        zh: {
            pageTitle: 'Zane Zhang | 个人主页',
            navLogo: '主页',
            navAbout: '关于我',
            navEducation: '教育经历',
            navProjects: '项目经历',
            navPublications: '论文发表',
            navMisc: '其他',
            heroGreeting: '你好，我是 👋',
            heroTagline: '本科二年级生 @ <span class="highlight">Tsinghua University</span><br>研究兴趣 <span class="highlight">CAD 几何建模 | 工业软件</span>',
            heroBio: '清华大学笃实书院本科生，IISE/DAIS 会员，清华大学写作与沟通课程长期助教，软件工程、航空航天工程与工业工程交叉背景。对工程软件与 CAD 相关方向保持长期兴趣，目前重点夯实 C / C++ / Python 与数据结构算法基础，并在数值计算与工程软件环境配置方面持续实践。',
            emailBtn: '<i class="fas fa-envelope"></i> 邮箱',
            githubBtn: '<i class="fab fa-github"></i> GitHub',
            avatarAlt: '个人照片',
            navToggleAria: '切换导航菜单',
            backToTopAria: '返回顶部',
            educationTitle: '<span class="title-icon">🎓</span> 教育经历',
            eduSchool: '清华大学（Tsinghua University）',
            eduDegree: '本科 - 笃实书院（软件工程 | 工业工程 | 航空航天工程）',
            eduDate: '2024 — 2028（预计）',
            eduDetail: '<strong>相关课程：</strong>程序设计（C/C++/Python）、数据结构、离散数学、数值分析、计算机组成原理、操作系统、人工智能基础（在修）。<br><strong>说明：</strong>正在系统提升 C/C++/Python 与数据结构算法能力，同时补强数值计算基础，目标是参与工程级 CAD / 数据库相关研究与实现。',
            projectsTitle: '<span class="title-icon">🔬</span> 项目经历',
            projectCourse: '课程项目',
            projectPersonal: '个人项目',
            projectGroup: '小组项目',
            projectCode: '代码',
            projectPaper: '论文',
            p1Meta: '课程：创意软件 &nbsp;·&nbsp; 2024 秋',
            p1Desc: 'SourceHunter 是一个支持文本、图像、视频与音频之间转换的应用，旨在提升多媒体表达与交流效率。',
            p2Meta: '课程：程序设计基础 &nbsp;·&nbsp; 2024 秋',
            p2Desc: 'Pokemon Backpack Battles 是一个 C/C++ 解谜游戏原型，聚焦背包/库存管理与战斗机制，包含核心游戏逻辑与 Visual Studio 工程。',
            p3Name: '子龙',
            p3Meta: '课程：程序设计进阶 &nbsp;·&nbsp; 2025 秋',
            p3Desc: '基于三国杀规则引擎扩展的单机战役项目。在原有规则与渲染框架上，设计并实现章节化战役系统、双 AI 协同（策略观察 + 叙事史官）与情绪驱动对话，完整实现玩家前端交互（选牌/选目标/弃牌），并支持 GUI 与批处理测试模式。',
            p4Desc: 'Light of Life 是面向 Swift Student Challenge 的交互式生成艺术应用。基于 L-System 分形算法，让“生命”朝向光生长，形成独特有机图案；每次创作都是独一无二的生命旅程。',
            p5Desc: '该研究面向 2050 年建设 10 万人月球殖民地的运输方案，对比太空电梯、火箭与混合运载，并通过静态基准、动态分配和随机鲁棒性三类模型分析。结果显示动态混合策略在时间、成本与环境影响之间取得更优平衡。',
            p6Desc: '基于 Python 的机器人小车控制项目，包含底盘、舵机与机械臂控制模块，支持 UART / PS2 等外设并提供演示入口。我为项目增加了摄像头传感器并实现了网络遥控器功能，支持局域网视频流与远程操控，便于嵌入式控制验证与远程演示。',
            publicationsTitle: '<span class="title-icon">📄</span> 论文发表',
            publicationsSubtitle: '（暂无正式论文发表，正在学习并计划参与相关研究）',
            publicationsEmpty: '🚧 正在准备中，敬请期待！',
            miscTitle: '<span class="title-icon">✨</span> 其他',
            miscHonorTitle: '🏆 竞赛与荣誉',
            miscSkillsTitle: '💻 技能',
            miscBeyondTitle: '🎵 学业之外',
            honor1: 'MCM/ICM - 参赛者 - 2026',
            honor2: 'Swift Student Challenge - 参赛者 - 2026',
            honor3: 'IISE/DAIS 数据分析竞赛 - 参赛者 - 2026',
            honor4: '清华之友黄奕聪伉俪奖学金 - 2025',
            honor5: '笃实书院海外实践支队长 - 2025',
            beyondDesc: 'INFJ，平时闲暇时分，我喜欢<strong>摄影</strong> 📸、<strong>徒步</strong> 🏔️ 和 <strong>弹吉他</strong> 🎸，也喜欢玩<strong>游戏</strong>，尤其是魂类作品和独立作品。',
            footerText: '&copy; 2026 Zane Zhang &nbsp;·&nbsp; Built with coffee and curiosity'
        },
        en: {
            pageTitle: 'Zane Zhang | Personal Homepage',
            navLogo: 'Home',
            navAbout: 'About',
            navEducation: 'Education',
            navProjects: 'Projects',
            navPublications: 'Publications',
            navMisc: 'Misc',
            heroGreeting: 'Hi there, I\'m 👋',
            heroTagline: 'Undergraduate @ <span class="highlight">Tsinghua University</span><br>Interested in <span class="highlight">CAD Geometric Modeling | Industrial Software</span>',
            heroBio: 'Undergraduate at Tsinghua University and member of IISE/DAIS,long-term TA in the Writing and Communication course, with interdisciplinary training in software engineering, aerospace engineering, and industrial engineering. I keep long-term interests in engineering software and CAD, and I am currently strengthening C/C++/Python and data structures & algorithms while practicing numerical computing and engineering software environment setup.',
            emailBtn: '<i class="fas fa-envelope"></i> Email',
            githubBtn: '<i class="fab fa-github"></i> GitHub',
            avatarAlt: 'Profile Photo',
            navToggleAria: 'Toggle navigation menu',
            backToTopAria: 'Back to top',
            educationTitle: '<span class="title-icon">🎓</span> Education',
            eduSchool: 'Tsinghua University',
            eduDegree: 'Undergraduate - Dushi College (Software Engineering | Industrial Engineering | Aerospace Engineering)',
            eduDate: '2024 — 2028 (Expected)',
            eduDetail: '<strong>Relevant Coursework:</strong> Programming (C/C++/Python), Data Structures, Discrete Mathematics, Numerical Analysis, Computer Organization, Operating Systems, and Fundamentals of AI (in progress).<br><strong>Note:</strong> I am rapidly improving C/C++/Python and algorithms while reinforcing numerical computing fundamentals, aiming to contribute to engineering-level CAD/database research and implementation.',
            projectsTitle: '<span class="title-icon">🔬</span> Projects',
            projectCourse: 'Course Project',
            projectPersonal: 'Personal Project',
            projectGroup: 'Group Project',
            projectCode: 'Code',
            projectPaper: 'Paper',
            p1Meta: 'Course: Creative Software &nbsp;·&nbsp; 2024 Autumn',
            p1Desc: 'SourceHunter is an application that enables conversion among text, images, videos, and audio files to improve multimedia communication efficiency.',
            p2Meta: 'Course: Introduction to Programming &nbsp;·&nbsp; 2024 Autumn',
            p2Desc: 'Pokemon Backpack Battles is a C/C++ puzzle-game prototype focused on backpack/inventory management and battle mechanics, including core game logic and a Visual Studio solution.',
            p3Name: 'Zilong',
            p3Meta: 'Course: Advanced Programming &nbsp;·&nbsp; 2025 Autumn',
            p3Desc: 'A single-player campaign project built on an extended Sanguosha rules engine. It adds a chapter-based campaign system, dual-AI collaboration (strategy observer + narrative historian), and emotion-driven dialogue, with complete player-side interactions (card/target/discard selection) and support for both GUI and batch-test modes.',
            p4Desc: 'Light of Life is an interactive generative art app designed for the Swift Student Challenge. Using L-System fractal algorithms, life grows toward the light to form unique organic patterns, and every creation becomes a one-of-a-kind journey.',
            p5Desc: 'This study analyzes transport plans for building a 100,000-person lunar colony by 2050, comparing space elevator, rocket, and hybrid delivery through static benchmark, dynamic allocation, and stochastic robustness models. Results show that the dynamic hybrid strategy best balances time, cost, and environmental impact.',
            p6Desc: 'A Python-based robotic car control project implementing chassis, servo and robotic-arm control modules with UART/PS2 peripheral interfaces and demo entry points. I contributed camera integration for vision-based sensing and implemented a network remote-control interface for live streaming and remote driving over LAN, making the platform suitable for embedded-robotics experiments and teleoperation demos.',
            publicationsTitle: '<span class="title-icon">📄</span> Publications',
            publicationsSubtitle: '(No formal publications yet; currently learning and preparing to join related research.)',
            publicationsEmpty: '🚧 Working on it... Stay tuned!',
            miscTitle: '<span class="title-icon">✨</span> Miscellaneous',
            miscHonorTitle: '🏆 Competitions & Honors',
            miscSkillsTitle: '💻 Skills',
            miscBeyondTitle: '🎵 Beyond Academics',
            honor1: 'MCM/ICM - Participant - 2026',
            honor2: 'Swift Student Challenge - Participant - 2026',
            honor3: 'IISE/DAIS Data Analytics Competition - Participant - 2026',
            honor4: 'Qinghua Zhiyou Scholarship (Yicong Huang Couple) - 2025',
            honor5: 'Dushi College Overseas Practice Team Leader - 2025',
            beyondDesc: 'As an INFJ, when I\'m not coding, I enjoy <strong>photography</strong> 📸, <strong>hiking</strong> 🏔️, and <strong>playing guitar</strong> 🎸. I also enjoy <strong>games</strong>, especially souls-like titles and independent games.',
            footerText: '&copy; 2026 Zane Zhang &nbsp;·&nbsp; Built with coffee and curiosity'
        }
    };

    const LANGUAGE_KEY = 'preferredLanguage';

    const setHTML = (selector, value) => {
        const element = document.querySelector(selector);
        if (element && value !== undefined) {
            element.innerHTML = value;
        }
    };

    const setText = (selector, value) => {
        const element = document.querySelector(selector);
        if (element && value !== undefined) {
            element.textContent = value;
        }
    };

    const setAttr = (selector, attr, value) => {
        const element = document.querySelector(selector);
        if (element && value !== undefined) {
            element.setAttribute(attr, value);
        }
    };

    const applyLanguage = (language) => {
        try {
            const t = translations[language] || translations.zh;

            document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
            document.title = t.pageTitle;

            setHTML('.nav-logo', `${t.navLogo}<span class="dot">.</span>`);
            setText('.nav-links a[href="#about"]', t.navAbout);
            setText('.nav-links a[href="#education"]', t.navEducation);
            setText('.nav-links a[href="#research"]', t.navProjects);
            setText('.nav-links a[href="#publications"]', t.navPublications);
            setText('.nav-links a[href="#misc"]', t.navMisc);

            setText('.hero-greeting', t.heroGreeting);
            setHTML('.hero-tagline', t.heroTagline);
            setText('.hero-bio', t.heroBio);
            setHTML('.hero-links .btn-primary', t.emailBtn);
            setHTML('.hero-links .btn-outline', t.githubBtn);
            setAttr('.avatar-wrapper img', 'alt', t.avatarAlt);

            setAttr('#navToggle', 'aria-label', t.navToggleAria);
            setAttr('#backToTop', 'aria-label', t.backToTopAria);

            setHTML('#education .section-title', t.educationTitle);
            setText('#education .edu-header h3', t.eduSchool);
            setText('#education .edu-degree', t.eduDegree);
            setText('#education .edu-date', t.eduDate);
            setHTML('#education .edu-detail', t.eduDetail);

            setHTML('#research .section-title', t.projectsTitle);
            setText('#research .research-card:nth-child(1) .research-tag', t.projectCourse);
            setHTML('#research .research-card:nth-child(1) .research-meta', t.p1Meta);
            setText('#research .research-card:nth-child(1) > p:not(.research-meta)', t.p1Desc);

            setText('#research .research-card:nth-child(2) .research-tag', t.projectCourse);
            setHTML('#research .research-card:nth-child(2) .research-meta', t.p2Meta);
            setText('#research .research-card:nth-child(2) > p:not(.research-meta)', t.p2Desc);

            setText('#research .research-card:nth-child(3) .research-tag', t.projectCourse);
            setText('#research .research-card:nth-child(3) h3', t.p3Name);
            setHTML('#research .research-card:nth-child(3) .research-meta', t.p3Meta);
            setText('#research .research-card:nth-child(3) > p:not(.research-meta)', t.p3Desc);

            setText('#research .research-card:nth-child(4) .research-tag', t.projectPersonal);
            setText('#research .research-card:nth-child(4) > p:not(.research-meta)', t.p4Desc);

            setText('#research .research-card:nth-child(5) .research-tag', t.projectGroup);
            setText('#research .research-card:nth-child(5) > p:not(.research-meta)', t.p5Desc);

            setText('#research .research-card:nth-child(6) .research-tag', t.projectGroup);
            setText('#research .research-card:nth-child(6) > p:not(.research-meta)', t.p6Desc);

            setHTML('#research .research-card:nth-child(1) .research-links a', `<i class="fab fa-github"></i> ${t.projectCode}`);
            setHTML('#research .research-card:nth-child(2) .research-links a', `<i class="fab fa-github"></i> ${t.projectCode}`);
            setHTML('#research .research-card:nth-child(3) .research-links a', `<i class="fab fa-github"></i> ${t.projectCode}`);
            setHTML('#research .research-card:nth-child(4) .research-links a', `<i class="fab fa-github"></i> ${t.projectCode}`);
            setHTML('#research .research-card:nth-child(5) .research-links a', `<i class="fas fa-file-alt"></i> ${t.projectPaper}`);
            setHTML('#research .research-card:nth-child(6) .research-links a', `<i class="fab fa-github"></i> ${t.projectCode}`);

            setHTML('#publications .section-title', t.publicationsTitle);
            setText('#publications .section-subtitle', t.publicationsSubtitle);
            setText('#publications .empty-state', t.publicationsEmpty);

            setHTML('#misc .section-title', t.miscTitle);
            setText('#misc .misc-card:nth-child(1) h3', t.miscHonorTitle);
            setText('#misc .misc-card:nth-child(2) h3', t.miscSkillsTitle);
            setText('#misc .misc-card:nth-child(3) h3', t.miscBeyondTitle);
            setText('#misc .misc-card:nth-child(1) li:nth-child(1)', t.honor1);
            setText('#misc .misc-card:nth-child(1) li:nth-child(2)', t.honor2);
            setText('#misc .misc-card:nth-child(1) li:nth-child(3)', t.honor3);
            setText('#misc .misc-card:nth-child(1) li:nth-child(4)', t.honor4);
            setText('#misc .misc-card:nth-child(1) li:nth-child(5)', t.honor5);
            setHTML('#misc .misc-card:nth-child(3) p', t.beyondDesc);

            setHTML('.footer-content p', t.footerText);

            if (langSwitch) {
                if (language === 'zh') {
                    langSwitch.textContent = 'EN';
                    langSwitch.setAttribute('aria-label', '切换到英文');
                } else {
                    langSwitch.textContent = '中';
                    langSwitch.setAttribute('aria-label', 'Switch to Chinese');
                }
            }

            try {
                localStorage.setItem(LANGUAGE_KEY, language);
            } catch (error) {
                // Ignore storage errors in restricted environments
            }
        } catch (error) {
            console.error('Language switch error:', error);
        }
    };

    const getInitialLanguage = () => {
        try {
            const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
            console.log('Saved language from localStorage:', savedLanguage);
            return savedLanguage === 'en' || savedLanguage === 'zh' ? savedLanguage : 'zh';
        } catch (error) {
            console.warn('localStorage not available:', error);
            return 'zh';
        }
    };

    let currentLanguage = getInitialLanguage();
    console.log('Initial language:', currentLanguage);
    applyLanguage(currentLanguage);

    if (langSwitch) {
        console.log('Language switch button found');
        langSwitch.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
            console.log('Switching to:', currentLanguage);
            applyLanguage(currentLanguage);
        });
    } else {
        console.warn('Language switch button not found');
    }

    const onScroll = () => {
        const scrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 20);
        }
        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 600);
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Mobile menu toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Animate hamburger to X
            navToggle.classList.toggle('active');
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        rootMargin: '-20% 0px -60% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // ---- Scroll reveal animation ----
    const revealElements = document.querySelectorAll(
        '.section-title, .card, .timeline-item, .hero-text, .hero-avatar, .pub-item'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Stagger animation for grids ----
    const grids = document.querySelectorAll('.research-grid, .misc-grid, .hero-links');
    grids.forEach(grid => grid.classList.add('reveal-children'));

    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    grids.forEach(grid => gridObserver.observe(grid));

    // ---- Back to top ----
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Fun: typed greeting on hero ----
    // (Optional: uncomment if you want a typing effect)
    // const greeting = document.querySelector('.hero-greeting');
    // const text = greeting.textContent;
    // greeting.textContent = '';
    // let i = 0;
    // const typeWriter = () => {
    //     if (i < text.length) {
    //         greeting.textContent += text.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 60);
    //     }
    // };
    // setTimeout(typeWriter, 500);
});
