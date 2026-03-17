$(document).ready(function () {

    // --- DATABASE LOKAL UNTUK HALAMAN PORTOFOLIO & DETAIL ---
    const projects = [
        {
            id: "ecoverse",
            title: "Eco Verse",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "2nd Winner TESA",
            desc: "SaaS-Enabled Marketplace untuk manajemen limbah cerdas. Menghubungkan warga, kurir, dan bank sampah.",
            tech: ["React Native", "Node.js", "Firebase"]
        },
        {
            id: "smileadvance",
            title: "Smile Advance",
            category: "web",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "Enterprise",
            desc: "Aplikasi procurement enterprise terintegrasi SAP. Melibatkan pemetaan data SQL tingkat lanjut.",
            tech: ["React", "PostgreSQL", "SAP API"]
        },
        {
            id: "fintechdash",
            title: "Fintech Dashboard",
            category: "web",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "UI/UX",
            desc: "Dashboard analitik keuangan real-time dengan visualisasi d3.js yang kompleks dan integrasi API perbankan.",
            tech: ["Vue.js", "TailwindCSS", "D3.js"]
        },
        {
            id: "medicare",
            title: "MediCare Booking App",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "Top Downloaded",
            desc: "Aplikasi pemesanan jadwal dokter dan teledokter dengan video call terintegrasi (WebRTC).",
            tech: ["Flutter", "WebRTC", "Laravel"]
        },
        {
            id: "rpgadventure",
            title: "RPG Fantasy Explorer",
            category: "game",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "Indie Game",
            desc: "Game role-playing 3D open-world dengan sistem pertarungan real-time dan environment prosedural.",
            tech: ["Unity", "C#", "Blender"]
        },
        {
            id: "ecommerce",
            title: "Fashion E-commerce",
            category: "web",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "High Conversion",
            desc: "Toko online pakaian premium dengan headless CMS (Shopify) dan integrasi payment gateway (Midtrans).",
            tech: ["Next.js", "Shopify API", "Stripe"]
        }
    ];
    const projectsData = {
        "ecoverse": {
            title: "Eco Verse", category: "mobile", client: "Startup B2C", timeline: "4 Months", role: "Mobile Arch., UI/UX",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            images: [
                "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            imageTitles: [
                "Eco Verse App Interface",
                "Courier Tracking System",
                "Gamification Dashboard"
            ],
            shortDesc: "SaaS-Enabled Marketplace untuk manajemen limbah cerdas. Menghubungkan warga, kurir, dan bank sampah.",
            fullDesc: "<p>Eco Verse dibangun dengan visi menciptakan sirkular ekonomi pada pengelolaan sampah perkotaan. Aplikasi ini memungkinkan pengguna rumah tangga untuk menyetorkan sampah daur ulang dan mendapatkan saldo digital.</p><p>Saya memimpin pengembangan *cross-platform* (Android & iOS) sambil memastikan antarmuka yang gamified dan intuitif untuk semua rentang usia.</p>",
            challenge: "Mengoptimalkan sinkronisasi data *real-time* lokasi kurir saat menjemput sampah di area minim sinyal.",
            solution: "Mengimplementasikan strategi *offline-first* dengan sinkronisasi Firebase lokal dan sistem antrean job (queue background) di React Native.",
            impact: "Mendapatkan 10,000+ unduhan di bulan pertama dengan tingkat adopsi harian (DAU) mencapai 40%. Mengurangi waktu penjemputan dari rata-rata 2 hari menjadi 4 jam.",
            tech: ["React Native", "Node.js", "Firebase", "Google Maps API", "Socket.io"],
            scope: ["Fullstack Architecture", "UI/UX Prototyping", "Offline-first sync", "Deployment App Store & Play Store"],
            features: ["Sistem tracking kurir realtime", "Gamifikasi & Leaderboard", "E-Wallet Integrasi", "Offline support"]
        },
        "smileadvance": {
            title: "Smile Advance", category: "enterprise", client: "Multinational FMCG", timeline: "6 Months", role: "Fullstack Lead Developer",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            imageTitles: [
                "Procurement Dashboard Overview",
                "Virtual Scrolling DataGrid",
                "SAP Approval Workflow"
            ],
            shortDesc: "Aplikasi procurement enterprise terintegrasi SAP. Melibatkan pemetaan data SQL tingkat lanjut.",
            fullDesc: "<p>Sistem internal korporat yang sepenuhnya menggantikan proses *procurement* manual dengan sistem serba digital yang terhubung secara asinkron dengan SAP ERP.</p><p>Tugas utama saya merancang arsitektur micro-frontend dan UI kompleks yang mampu menangani tabel berisi puluhan ribu baris data tanpa jeda lag browser.</p>",
            challenge: "Merender DataGrid raksasa (50.000+ baris) di memori DOM Browser tanpa menyebabkan layar freezing atau memakan RAM besar.",
            solution: "Menggunakan teknik DOM *Virtualization / Windowing* dan pemisahan state management menggunakan Redux Toolkit dengan normalisasi data.",
            impact: "Waktu pemrosesan dokumen pengadaan turun hingga 65%, menghemat biaya operasional ratusan juta rupiah setiap kuartalnya. Mendapat penghargaan inovasi di lingkup korporat internal.",
            tech: ["React.js", "Redux Toolkit", "PostgreSQL", "SAP BAPI Integration", "Material UI"],
            scope: ["Micro-frontend Architecture", "Performance Optimization", "State Management", "API Middleware integration"],
            features: ["Virtual Scrolling DataGrid", "Dynamic multi-step Approval", "SAP Async Postback", "Role-based UI"]
        },
        "fintechdash": {
            title: "Fintech Dashboard", category: "web", client: "Bank Sampah / Koperasi", timeline: "2.5 Months", role: "Fullstack Developer",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            imageTitles: [
                "Real-time Financial Analytics",
                "D3.js Custom Visualizations",
                "Cash Flow Monitoring Panel"
            ],
            shortDesc: "Dashboard analitik keuangan real-time dengan visualisasi d3.js yang kompleks dan integrasi API perbankan.",
            fullDesc: "<p>Sebuah platform analitik finansial yang memberikan insight visual bagi manajer untuk memonitor arus kas, pinjaman, dan deposito nasabah secara seketika (realtime).</p>",
            challenge: "Membuat visualisasi grafik (chart) kustom yang bisa di-drill down hingga level per-transaksi.",
            solution: "Membangun *wrapper* komponen Vue di atas *library* D3.js yang memperbolehkan perhitungan SVG matematis dinamis berdasarkan dimensi kontainer.",
            impact: "Memudahkan manajer dan dewan redaksi untuk mengambil keputusan bisnis 3x lebih cepat dibandingkan menggunakan laporan excel konvensional bulanan.",
            tech: ["Vue.js", "TailwindCSS", "D3.js", "Express.js"],
            scope: ["Fullstack Dashboard", "D3.js Data Visualization", "RESTful API Development", "WebSocket Setup"],
            features: ["Interactive D3.js Charts", "Realtime WebSocket ticker", "Data Export (Excel/PDF)", "Dark/Light mode seamless"]
        },
        "medicare": {
            title: "MediCare Booking App", category: "mobile", client: "Private Hospital", timeline: "5 Months", role: "Mobile Developer",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            images: [
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            imageTitles: [
                "Telemedicine App Interface",
                "Encrypted WebRTC Video Call",
                "Hospital Booking System"
            ],
            shortDesc: "Aplikasi pemesanan jadwal dokter dan teledokter dengan video call terintegrasi (WebRTC).",
            fullDesc: "<p>Solusi kesehatan terpadu pasca-pandemi yang mengizinkan pasien tidak hanya memesan jadwal kunjungan rumah sakit fisik, tapi juga mengadakan Telemedicine lewat video call end-to-end terenkripsi.</p>",
            challenge: "Kestabilan dan delay server saat mentransfer paket Data stream Video Call.",
            solution: "Penyetelan koneksi Peer-to-Peer menggunakan WebRTC dengan bantuan server TURN kustom untuk menembus aturan NAT ketat rumah sakit.",
            impact: "Mengelola lebih dari 1,000 sesi telemedis tanpa kendala teknis pada peluncuran quarter awalnya. Mengurangi antrean fisik RS secara drastis.",
            tech: ["Flutter", "Dart", "WebRTC", "Laravel API", "Pusher"],
            scope: ["Cross-platform Mobile Dev", "WebRTC implementation", "Push Notification Integration", "Payment Gateway Setup"],
            features: ["P2P Video Call Telemedicine", "Live Chat", "Sistem Push Notification", "Payment Gateway"]
        },
        "rpgadventure": {
            title: "RPG Fantasy Explorer", category: "game", client: "Indie Studio", timeline: "8 Months", role: "Game Programmer",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            images: [
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            imageTitles: [
                "Procedural Open World",
                "Real-time Combat Action"
            ],
            shortDesc: "Game role-playing 3D open-world dengan sistem pertarungan real-time dan environment prosedural.",
            fullDesc: "<p>RPG Fantasy Explorer adalah proyek game indie yang berfokus pada eksplorasi dunia fantasi yang luas dengan mekanik pertarungan yang intens.</p><p>Saya bertanggung jawab atas pemrograman mekanik utama termasuk AI musuh, sistem inventaris, dan optimasi rendering.</p>",
            challenge: "Mengelola performa rendering saat memuat ribuan objek secara dinamis (procedural generation) tanpa frame drop.",
            solution: "Menerapkan sistem Object Pooling dan teknik Occlusion Culling di Unity, serta menggunakan shader kustom yang dioptimalkan.",
            impact: "Game berjalan mulus di 60 FPS pada perangkat mid-range dan mendapatkan review 'Sangat Positif' selama fase Early Access.",
            tech: ["Unity 3D", "C#", "Blender", "HLSL"],
            scope: ["Core Gameplay Programming", "Enemy AI", "UI/UX Game Design", "Performance Optimization"],
            features: ["Open World Exploration", "Real-time Combat System", "Dynamic Weather", "Quest Tracking"]
        }
    };

    // === FUNGSI UMUM UNTUK SEMUA HALAMAN ===

    // === FITUR DARK MODE ===
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            $('#themeToggle').html('<span class="material-symbols-rounded" style="font-size: 20px;">light_mode</span>');
        } else {
            $('#themeToggle').html('<span class="material-symbols-rounded" style="font-size: 20px;">dark_mode</span>');
        }
    }

    // Sinkronisasi ikon tombol saat halaman dimuat
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeIcon(currentTheme);

    // Event klik untuk toggle tema
    $('#themeToggle').on('click', function () {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Efek shadow pada Navbar saat di-scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Smooth scroll untuk link anchor
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        if (target !== '#') {
            const offsetTop = $(target).offset().top - 80;
            $('html, body').animate({ scrollTop: offsetTop }, 600);
        }
    });

    // Tombol Back to Top
    const $backToTopBtn = $('#backToTop');
    if ($backToTopBtn.length) {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $backToTopBtn.addClass('show');
            } else {
                $backToTopBtn.removeClass('show');
            }
        });
        $backToTopBtn.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
        });
    }

    // === FUNGSI KHUSUS UNTUK INDEX.HTML ===

    // Efek Typewriter
    const txtElement = document.querySelector('.typewriter-text');
    if (txtElement) {
        const words = ["High-Performance Apps", "Stunning Web Interfaces", "Enterprise Solutions"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                txtElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                txtElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            let typeSpeed = isDeleting ? 40 : 80;
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            setTimeout(typeWriter, typeSpeed);
        }
        setTimeout(typeWriter, 1000);
    }

    // Animasi Scroll Reveal
    if ($('.reveal, .reveal-left, .reveal-right').length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        $('.reveal, .reveal-left, .reveal-right').each(function () {
            revealObserver.observe(this);
        });
    }

    // Animasi Counter Angka
    if ($('.counter').length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const $counter = $(entry.target);
                    const target = parseInt($counter.attr('data-target'));
                    if (target) { // Hanya animasikan jika ada data-target
                        $counter.prop('Counter', 0).animate({
                            Counter: target
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $counter.text(Math.ceil(now) + '+');
                            },
                            complete: function () {
                                $counter.text(target + '+');
                            }
                        });
                    }
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        $('.counter').each(function () {
            counterObserver.observe(this);
        });
    }

    // Accordion untuk FAQ
    if ($('.faq-item').length) {
        // Set item pertama aktif
        $('.faq-item').first().addClass('active');

        $('.faq-question').on('click', function () {
            const $item = $(this).parent();
            const isActive = $item.hasClass('active');
            $('.faq-item').removeClass('active'); // Tutup semua
            if (!isActive) {
                $item.addClass('active'); // Buka yang diklik
            }
        });
    }

    // Efek Aurora & Glow pada Kursor di Hero Section
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const $hero = $('#hero');
    if (!isTouchDevice && $hero.length) {
        const $cursorGlow = $('<div>').addClass('blob-cursor').appendTo($hero.find('.aurora-hero'));
        const $blobs = $('.aurora-blob:not(.blob-cursor)');
        let mouseX = 0, mouseY = 0, isMoving = false;

        $hero.on('mousemove', function (e) {
            const offset = $hero.offset();
            const width = $hero.outerWidth();
            const height = $hero.outerHeight();

            $cursorGlow.css({
                opacity: 1,
                left: (e.pageX - offset.left) + 'px',
                top: (e.pageY - offset.top) + 'px'
            });

            mouseX = (e.pageX - offset.left) / width - 0.5;
            mouseY = (e.pageY - offset.top) / height - 0.5;

            if (!isMoving) {
                isMoving = true;
                requestAnimationFrame(updateAuroraPosition);
            }
        });

        function updateAuroraPosition() {
            $blobs.each(function (index) {
                const speed = (index + 1) * 15;
                $(this).css('transform', `translate(${mouseX * speed}px, ${mouseY * speed}px)`);
            });
            isMoving = false;
        }

        $hero.on('mouseleave', function () {
            $cursorGlow.css('opacity', 0);
            $blobs.css('transform', 'translate(0, 0)');
        });
    }

    // === FUNGSI KHUSUS UNTUK PORTOFOLIO.HTML ===
    if ($('#portfolioGrid').length) {
        function renderProjects(data) {
            const $grid = $('#portfolioGrid');
            $grid.empty();
            $('#noResults').hide();

            if (data.length === 0) {
                $('#noResults').show();
                return;
            }

            data.forEach((p, index) => {
                const delay = index * 0.05;
                const techBadges = p.tech.map(t => `<span class="badge bg-light text-secondary border rounded-pill me-1 mb-1 px-2 fw-medium">${t}</span>`).join('');
                const cardHtml = `
                    <div class="col-md-6 col-lg-4" style="animation: fadeUp 0.5s ease ${delay}s both;">
                        <a href="detailporto.html?id=${p.id}" class="card-modern">
                            <div class="card-modern-img position-relative">
                                <div class="card-badge"><span class="material-symbols-rounded me-1" style="font-size: 14px;">stars</span> ${p.badge}</div>
                                <img src="${p.image}" alt="${p.title}" loading="lazy">
                                <div class="position-absolute top-0 start-0 w-100 h-100" oncontextmenu="return false;"></div>
                            </div>
                            <h4 class="fw-bold text-dark mb-2">${p.title}</h4>
                            <p class="text-secondary mb-3 flex-grow-1" style="font-size: 14px;">${p.desc}</p>
                            <div class="mt-auto">${techBadges}</div>
                        </a>
                    </div>`;
                $grid.append(cardHtml);
            });
        }

        let currentFilter = 'all';
        let currentSearch = '';

        function applyFilters() {
            const filtered = projects.filter(p => {
                const matchCategory = currentFilter === 'all' || p.category === currentFilter;
                const term = currentSearch.toLowerCase();
                const matchSearch = p.title.toLowerCase().includes(term) ||
                    p.desc.toLowerCase().includes(term) ||
                    p.tech.some(t => t.toLowerCase().includes(term));
                return matchCategory && matchSearch;
            });
            renderProjects(filtered);
        }

        $('.filter-btn').on('click', function () {
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
            currentFilter = $(this).data('filter');
            applyFilters();
        });

        $('#searchInput').on('input', function () {
            currentSearch = $(this).val();
            applyFilters();
        });

        // Render awal
        renderProjects(projects);
    }

    // === FUNGSI KHUSUS UNTUK DETAILPORTO.HTML ===
    if ($('#projectContainer').length) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (projectId && projectsData[projectId]) {
            const p = projectsData[projectId];

            $('#projectTitle').text(p.title);
            $('#projectCategory').text(p.category);
            $('#projectRole').html(`<span class="material-symbols-rounded me-1" style="font-size: 16px;">person</span> ${p.role}`);
            $('#projectShortDesc').text(p.shortDesc);
            $('#projectFullDesc').html(p.fullDesc);
            $('#projectChallenge').text(p.challenge);
            $('#projectSolution').text(p.solution);

            if (p.impact) {
                $('#projectImpact').text(p.impact);
                $('#impactSection').show();
            }

            $('#projectClient').text(p.client);
            $('#projectTimeline').text(p.timeline);

            // Populate Scope
            if (p.scope && p.scope.length > 0) {
                const scopeHtml = p.scope.map(s => `<li class="mb-2">${s}</li>`).join('');
                $('#projectScope').html(scopeHtml);
            } else {
                $('#projectScope').html('<li class="mb-2 text-muted">End-to-end development</li>');
            }

            // Setup Image Gallery
            const projectImages = p.images || [p.image];
            let currentImgIndex = 0;

            function updateGallery(index) {
                currentImgIndex = index;
                $('#projectImageMain').css('opacity', 0.6);
                setTimeout(() => {
                    const imgAlt = p.imageTitles && p.imageTitles[index] ? p.imageTitles[index] : `${p.title} - Image ${index + 1}`;
                    $('#projectImageMain').attr('src', projectImages[index]).attr('alt', imgAlt).css('opacity', 1);
                }, 200);

                $('.thumbnail-item').removeClass('active');
                $(`.thumbnail-item[data-index="${index}"]`).addClass('active');
            }

            if (projectImages.length > 0) {
                const thumbsHtml = projectImages.map((img, idx) => {
                    const thumbAlt = p.imageTitles && p.imageTitles[idx] ? p.imageTitles[idx] : `Thumbnail ${idx + 1}`;
                    return `
                    <div class="thumbnail-item ${idx === 0 ? 'active' : ''} position-relative" data-index="${idx}">
                        <img src="${img}" alt="${thumbAlt}" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100" oncontextmenu="return false;"></div>
                    </div>
                `}).join('');
                $('#galleryThumbnails').html(thumbsHtml);
                updateGallery(0);

                $('.thumbnail-item').on('click', function () { updateGallery($(this).data('index')); });
                $('#galleryPrev').on('click', function () { updateGallery(currentImgIndex === 0 ? projectImages.length - 1 : currentImgIndex - 1); });
                $('#galleryNext').on('click', function () { updateGallery(currentImgIndex === projectImages.length - 1 ? 0 : currentImgIndex + 1); });

                // Hide controls if only 1 image
                if (projectImages.length === 1) {
                    $('#galleryPrev, #galleryNext, #galleryThumbnails').hide();
                }
            }

            // Setup Lightbox (Fullscreen)
            const openLightbox = () => {
                $('#lightboxImage').attr('src', projectImages[currentImgIndex]);
                const imgTitle = p.imageTitles && p.imageTitles[currentImgIndex] ? p.imageTitles[currentImgIndex] : p.title;
                $('#lightboxCaption').text(`${imgTitle} (Image ${currentImgIndex + 1} of ${projectImages.length})`);
                $('#lightbox').fadeIn(300).css('display', 'flex');
                $('body').css('overflow', 'hidden'); // Mencegah scrolling pada background

                // Sembunyikan navigasi lightbox jika hanya ada 1 gambar
                if (projectImages.length > 1) {
                    $('#lightboxPrev, #lightboxNext').show();
                } else {
                    $('#lightboxPrev, #lightboxNext').hide();
                }
            };

            $('#mainImageShield, #btnFullscreen').on('click', openLightbox);

            $('#lightbox, #closeLightbox').on('click', function (e) {
                if (e.target === this || e.currentTarget.id === 'closeLightbox') {
                    $('#lightbox').fadeOut(300);
                    $('body').css('overflow', ''); // Mengembalikan scrolling
                }
            });

            // Navigasi Lightbox Click
            $('#lightboxPrev').on('click', function (e) {
                e.stopPropagation(); // Mencegah lightbox tertutup saat tombol diklik
                updateGallery(currentImgIndex === 0 ? projectImages.length - 1 : currentImgIndex - 1);
                $('#lightboxImage').attr('src', projectImages[currentImgIndex]);
                const imgTitle = p.imageTitles && p.imageTitles[currentImgIndex] ? p.imageTitles[currentImgIndex] : p.title;
                $('#lightboxCaption').text(`${imgTitle} (Image ${currentImgIndex + 1} of ${projectImages.length})`);
            });

            $('#lightboxNext').on('click', function (e) {
                e.stopPropagation();
                updateGallery(currentImgIndex === projectImages.length - 1 ? 0 : currentImgIndex + 1);
                $('#lightboxImage').attr('src', projectImages[currentImgIndex]);
                const imgTitle = p.imageTitles && p.imageTitles[currentImgIndex] ? p.imageTitles[currentImgIndex] : p.title;
                $('#lightboxCaption').text(`${imgTitle} (Image ${currentImgIndex + 1} of ${projectImages.length})`);
            });

            // Navigasi Keyboard (Escape & Arrow Keys)
            $(document).on('keydown', function (e) {
                if ($('#lightbox').is(':visible')) {
                    if (e.key === 'Escape') $('#closeLightbox').click();
                    if (e.key === 'ArrowLeft' && projectImages.length > 1) $('#lightboxPrev').click();
                    if (e.key === 'ArrowRight' && projectImages.length > 1) $('#lightboxNext').click();
                }
            });

            const techHtml = p.tech.map(t => `<span class="badge bg-light text-secondary border rounded-pill px-3 py-2 fw-medium">${t}</span>`).join('');
            $('#projectTechList').html(techHtml);

            const featHtml = p.features.map(f => `<li class="mb-2">${f}</li>`).join('');
            $('#projectFeatures').html(featHtml);

            $('#projectContainer').fadeIn(400);
        } else {
            $('#errorState').fadeIn(400);
        }
    }
});