
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abidzar - Nikmati Cita Rasa Terbaik</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Iconify Icons -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa',
                            300: '#fdba74', 400: '#fb923c', 500: '#f97316',
                            600: '#ea580c', 700: '#c2410c', 800: '#9a3412',
                            900: '#7c2d12', 950: '#431407',
                        },
                        warm: {
                            50: '#fdf8f0', 100: '#f5ebe0', 200: '#e8d5c0',
                            300: '#d4b896', 400: '#c09a6e', 500: '#a67c52',
                            600: '#8b6340', 700: '#6d4c30', 800: '#4a3420',
                            900: '#2d1f14',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }
    </script>

    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes badgePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.25); }
        }
        .badge-pulse {
            animation: badgePulse 0.35s ease-out;
        }

        @keyframes toastIn {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes toastOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100%); }
        }
        .toast-in { animation: toastIn 0.35s ease-out forwards; }
        .toast-out { animation: toastOut 0.3s ease-in forwards; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #fdf8f0; }
        ::-webkit-scrollbar-thumb { background: #d4b896; border-radius: 999px; }
        ::-webkit-scrollbar-thumb:hover { background: #c09a6e; }

        .grain-overlay::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            opacity: 0.08;
            mix-blend-mode: overlay;
            pointer-events: none;
        }

        .menu-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px -12px rgba(124, 45, 18, 0.18);
        }

        .menu-card.list-view:hover {
            transform: translateY(-2px);
        }
    </style>
</head>

<body class="bg-warm-50 font-sans text-warm-900 antialiased">

    <!-- TOAST CONTAINER -->
    <div id="toast-container" class="fixed top-24 right-4 z-[100] flex flex-col gap-3 pointer-events-none"></div>

    <!-- ===================== HEADER ===================== -->
    <header id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="#home" class="flex items-center gap-2 group">
                    <div class="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow">
                        <iconify-icon icon="lucide:chef-hat" class="text-white text-xl"></iconify-icon>
                    </div>
                    <span class="font-serif text-2xl font-bold text-warm-900">Abidzar</span>
                </a>

                <nav class="hidden md:flex items-center gap-1">
                    <a href="#home" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200">Home</a>
                    <a href="#menu" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200">Menu</a>
                    <a href="#tentang" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200">Tentang</a>
                    <a href="#kontak" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200">Kontak</a>
                </nav>

                <div class="flex items-center gap-3">
                    <button id="cart-btn" class="relative p-2.5 rounded-xl bg-white border border-warm-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 shadow-sm">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg text-warm-700"></iconify-icon>
                        <span id="cart-badge" class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center opacity-0 transition-opacity">0</span>
                    </button>
                    <button id="mobile-menu-btn" class="md:hidden p-2.5 rounded-xl bg-white border border-warm-200 hover:border-brand-300 transition-all shadow-sm">
                        <iconify-icon icon="lucide:menu" class="text-lg text-warm-700" id="menu-icon"></iconify-icon>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white/95 backdrop-blur-xl border-t border-warm-100 shadow-xl">
            <div class="px-4 py-4 flex flex-col gap-1">
                <a href="#home" class="mobile-nav-link px-4 py-3 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all">Home</a>
                <a href="#menu" class="mobile-nav-link px-4 py-3 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all">Menu</a>
                <a href="#tentang" class="mobile-nav-link px-4 py-3 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all">Tentang</a>
                <a href="#kontak" class="mobile-nav-link px-4 py-3 rounded-lg text-sm font-medium text-warm-700 hover:text-brand-600 hover:bg-brand-50 transition-all">Kontak</a>
            </div>
        </div>
    </header>

    <!-- ===================== HERO SECTION ===================== -->
    <section id="home" class="relative min-h-[85vh] flex items-center overflow-hidden grain-overlay">
        <div class="absolute inset-0">
            <!-- Gambar meja makan restoran -->
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&auto=format" alt="Restoran Abidzar" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/70 to-warm-900/40"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-warm-900/30"></div>
        </div>
        <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 backdrop-blur-sm mb-6 animate-fade-in-up">
                    <iconify-icon icon="lucide:sparkles" class="text-brand-400 text-sm"></iconify-icon>
                    <span class="text-brand-200 text-xs font-semibold tracking-wider uppercase">Restoran Terbaik 2026</span>
                </div>

                <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
                    Nikmati <br>
                    <span class="text-brand-400">Cita Rasa</span><br>
                    Terbaik
                </h1>

                <p class="text-warm-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up" style="animation-delay: 0.2s">
                    Abidzar menghadirkan sajian autentik dengan bahan pilihan terbaik. Setiap hidangan dibuat dengan penuh cinta dan keahlian untuk memuaskan selera Anda.
                </p>

                <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.3s">
                    <a href="#menu" class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 transition-all duration-200 hover:gap-3">
                        Lihat Menu
                        <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
                    </a>
                    <a href="#tentang" class="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200">
                        <iconify-icon icon="lucide:play-circle" class="text-base"></iconify-icon>
                        Tentang Kami
                    </a>
                </div>

                <div class="flex items-center gap-8 mt-12 animate-fade-in-up" style="animation-delay: 0.4s">
                    <div>
                        <div class="text-2xl font-bold text-white">50+</div>
                        <div class="text-warm-400 text-xs font-medium">Menu Pilihan</div>
                    </div>
                    <div class="w-px h-10 bg-warm-600"></div>
                    <div>
                        <div class="text-2xl font-bold text-white">4.9</div>
                        <div class="text-warm-400 text-xs font-medium flex items-center gap-1">
                            <iconify-icon icon="lucide:star" class="text-brand-400"></iconify-icon>
                            Rating
                        </div>
                    </div>
                    <div class="w-px h-10 bg-warm-600"></div>
                    <div>
                        <div class="text-2xl font-bold text-white">10K+</div>
                        <div class="text-warm-400 text-xs font-medium">Pelanggan</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span class="text-warm-400 text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
            <iconify-icon icon="lucide:chevron-down" class="text-warm-400 text-lg"></iconify-icon>
        </div>
    </section>

    <!-- ===================== MENU SECTION ===================== -->
    <section id="menu" class="relative py-20 lg:py-28">
        <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-200/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brand-300/15 rounded-full blur-[80px] pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 mb-4">
                    <iconify-icon icon="lucide:utensils" class="text-brand-600 text-sm"></iconify-icon>
                    <span class="text-brand-700 text-xs font-semibold tracking-wider uppercase">Menu Kami</span>
                </div>
                <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-900 tracking-tight mb-4">
                    Pilihan <span class="text-brand-600">Hidangan</span> Terbaik
                </h2>
                <p class="text-warm-500 text-base max-w-xl mx-auto leading-relaxed">
                    Temukan beragam hidangan lezat yang kami sajikan dengan bahan segar dan resep turun-temurun
                </p>
            </div>

            <!-- Toolbar -->
            <div class="bg-white rounded-2xl border border-warm-200 shadow-lg shadow-warm-200/30 p-4 sm:p-5 mb-10">
                <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    <div class="relative w-full lg:w-80">
                        <iconify-icon icon="lucide:search" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-400 text-lg"></iconify-icon>
                        <input type="text" id="search-input" placeholder="Cari menu favorit..." class="w-full pl-10 pr-4 py-2.5 bg-warm-50 border border-warm-200 rounded-xl text-sm text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all">
                        <button id="search-clear" class="hidden absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-600 transition-colors">
                            <iconify-icon icon="lucide:x" class="text-base"></iconify-icon>
                        </button>
                    </div>

                    <div class="flex flex-wrap gap-2" id="category-filters">
                        <button data-category="all" class="filter-btn active px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-brand-600 text-white shadow-sm">Semua</button>
                        <button data-category="makanan-utama" class="filter-btn px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-warm-100 text-warm-600 hover:bg-warm-200">Makanan Utama</button>
                        <button data-category="minuman" class="filter-btn px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-warm-100 text-warm-600 hover:bg-warm-200">Minuman</button>
                        <button data-category="dessert" class="filter-btn px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-warm-100 text-warm-600 hover:bg-warm-200">Dessert</button>
                        <button data-category="snack" class="filter-btn px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-warm-100 text-warm-600 hover:bg-warm-200">Snack</button>
                    </div>

                    <div class="flex items-center gap-1 bg-warm-100 rounded-lg p-1">
                        <button id="grid-view-btn" class="view-btn active p-2 rounded-md bg-white shadow-sm text-brand-600 transition-all" title="Grid View">
                            <iconify-icon icon="lucide:grid-3x3" class="text-lg"></iconify-icon>
                        </button>
                        <button id="list-view-btn" class="view-btn p-2 rounded-md text-warm-400 hover:text-warm-600 transition-all" title="List View">
                            <iconify-icon icon="lucide:list" class="text-lg"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between mb-6">
                <p id="result-count" class="text-sm text-warm-500">Menampilkan <span class="font-semibold text-warm-700">18</span> menu</p>
            </div>

            <div id="menu-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>

            <div id="empty-state" class="hidden text-center py-20">
                <iconify-icon icon="lucide:search-x" class="text-6xl text-warm-300 mb-4"></iconify-icon>
                <h3 class="font-serif text-xl font-semibold text-warm-700 mb-2">Menu Tidak Ditemukan</h3>
                <p class="text-warm-400 text-sm">Coba kata kunci lain atau pilih kategori yang berbeda</p>
            </div>
        </div>
    </section>

    <!-- ===================== TENTANG SECTION ===================== -->
    <section id="tentang" class="relative py-20 lg:py-28 bg-warm-900 overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="relative">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                        <!-- Gambar chef memasak -->
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&h=500&fit=crop&auto=format" alt="Chef Abidzar" class="w-full h-[350px] sm:h-[450px] object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-warm-900/40 to-transparent"></div>
                    </div>
                    <div class="absolute -bottom-6 -right-4 sm:right-6 bg-brand-600 text-white p-5 rounded-xl shadow-xl shadow-brand-900/30">
                        <div class="text-3xl font-bold">15+</div>
                        <div class="text-brand-200 text-xs font-medium">Tahun Pengalaman</div>
                    </div>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 mb-4">
                        <iconify-icon icon="lucide:heart" class="text-brand-400 text-sm"></iconify-icon>
                        <span class="text-brand-300 text-xs font-semibold tracking-wider uppercase">Tentang Kami</span>
                    </div>
                    <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                        Cita Rasa Autentik Sejak <span class="text-brand-400">2011</span>
                    </h2>
                    <p class="text-warm-300 text-base leading-relaxed mb-6">
                        Abidzar lahir dari kecintaan terhadap kuliner Nusantara. Bermula dari dapur kecil di rumah, kini kami telah melayani ribuan pelanggan dengan hidangan berkualitas tinggi yang memadukan resep tradisional dengan sentuhan modern.
                    </p>
                    <p class="text-warm-400 text-sm leading-relaxed mb-8">
                        Setiap bahan dipilih langsung dari petani lokal terbaik. Kami percaya bahwa hidangan terbaik dimulai dari bahan terbaik. Dengan tim chef berpengalaman, kami memastikan setiap piring yang keluar dari dapur kami adalah karya seni kuliner.
                    </p>

                    <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <iconify-icon icon="lucide:leaf" class="text-brand-400"></iconify-icon>
                            </div>
                            <span class="text-warm-200 text-sm font-medium">Bahan Segar</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <iconify-icon icon="lucide:chef-hat" class="text-brand-400"></iconify-icon>
                            </div>
                            <span class="text-warm-200 text-sm font-medium">Chef Berpengalaman</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <iconify-icon icon="lucide:flame" class="text-brand-400"></iconify-icon>
                            </div>
                            <span class="text-warm-200 text-sm font-medium">Resep Autentik</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <iconify-icon icon="lucide:truck" class="text-brand-400"></iconify-icon>
                            </div>
                            <span class="text-warm-200 text-sm font-medium">Delivery Cepat</span>
                        </div>
                    </div>

                    <a href="#menu" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-600/25 transition-all duration-200 hover:gap-3">
                        Pesan Sekarang
                        <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ===================== KONTAK SECTION ===================== -->
    <section id="kontak" class="relative py-20 lg:py-28">
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 mb-4">
                    <iconify-icon icon="lucide:map-pin" class="text-brand-600 text-sm"></iconify-icon>
                    <span class="text-brand-700 text-xs font-semibold tracking-wider uppercase">Kontak</span>
                </div>
                <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-900 tracking-tight mb-4">
                    Hubungi <span class="text-brand-600">Kami</span>
                </h2>
                <p class="text-warm-500 text-base max-w-xl mx-auto leading-relaxed">
                    Kami selalu siap melayani Anda. Datang langsung atau hubungi kami untuk reservasi
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div class="bg-white rounded-2xl border border-warm-200 p-6 text-center shadow-md shadow-warm-200/20 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                    <div class="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <iconify-icon icon="lucide:map-pin" class="text-2xl text-brand-600"></iconify-icon>
                    </div>
                    <h3 class="font-semibold text-warm-800 mb-2">Alamat</h3>
                    <p class="text-warm-500 text-sm leading-relaxed">Jl. Kuliner Nusantara No. 88, Jakarta Selatan, 12345</p>
                </div>
                <div class="bg-white rounded-2xl border border-warm-200 p-6 text-center shadow-md shadow-warm-200/20 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                    <div class="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <iconify-icon icon="lucide:phone" class="text-2xl text-brand-600"></iconify-icon>
                    </div>
                    <h3 class="font-semibold text-warm-800 mb-2">Telepon</h3>
                    <p class="text-warm-500 text-sm leading-relaxed">(021) 8888-7777</p>
                    <p class="text-warm-500 text-sm">+62 812-3456-7890</p>
                </div>
                <div class="bg-white rounded-2xl border border-warm-200 p-6 text-center shadow-md shadow-warm-200/20 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                    <div class="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <iconify-icon icon="lucide:mail" class="text-2xl text-brand-600"></iconify-icon>
                    </div>
                    <h3 class="font-semibold text-warm-800 mb-2">Email</h3>
                    <p class="text-warm-500 text-sm leading-relaxed">info@abidzar.id</p>
                    <p class="text-warm-500 text-sm">reservasi@abidzar.id</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===================== FOOTER ===================== -->
    <footer class="bg-warm-900 border-t border-warm-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                            <iconify-icon icon="lucide:chef-hat" class="text-white text-xl"></iconify-icon>
                        </div>
                        <span class="font-serif text-2xl font-bold text-white">Abidzar</span>
                    </div>
                    <p class="text-warm-400 text-sm leading-relaxed mb-6">
                        Nikmati cita rasa terbaik dengan bahan pilihan dan resep autentik Nusantara. Setiap sajian dibuat dengan cinta.
                    </p>
                    <div class="flex items-center gap-3">
                        <a href="#" class="w-9 h-9 bg-warm-800 hover:bg-brand-600 rounded-lg flex items-center justify-center text-warm-400 hover:text-white transition-all">
                            <iconify-icon icon="lucide:instagram" class="text-base"></iconify-icon>
                        </a>
                        <a href="#" class="w-9 h-9 bg-warm-800 hover:bg-brand-600 rounded-lg flex items-center justify-center text-warm-400 hover:text-white transition-all">
                            <iconify-icon icon="lucide:facebook" class="text-base"></iconify-icon>
                        </a>
                        <a href="#" class="w-9 h-9 bg-warm-800 hover:bg-brand-600 rounded-lg flex items-center justify-center text-warm-400 hover:text-white transition-all">
                            <iconify-icon icon="lucide:twitter" class="text-base"></iconify-icon>
                        </a>
                        <a href="#" class="w-9 h-9 bg-warm-800 hover:bg-brand-600 rounded-lg flex items-center justify-center text-warm-400 hover:text-white transition-all">
                            <iconify-icon icon="lucide:youtube" class="text-base"></iconify-icon>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                        <iconify-icon icon="lucide:clock" class="text-brand-400"></iconify-icon>
                        Jam Operasional
                    </h4>
                    <ul class="space-y-2.5">
                        <li class="flex justify-between text-sm">
                            <span class="text-warm-400">Senin - Jumat</span>
                            <span class="text-warm-200 font-medium">10:00 - 22:00</span>
                        </li>
                        <li class="flex justify-between text-sm">
                            <span class="text-warm-400">Sabtu</span>
                            <span class="text-warm-200 font-medium">09:00 - 23:00</span>
                        </li>
                        <li class="flex justify-between text-sm">
                            <span class="text-warm-400">Minggu</span>
                            <span class="text-warm-200 font-medium">09:00 - 21:00</span>
                        </li>
                        <li class="pt-2 mt-2 border-t border-warm-800">
                            <span class="text-brand-400 text-xs font-medium flex items-center gap-1">
                                <iconify-icon icon="lucide:circle-check" class="text-sm"></iconify-icon>
                                Buka Hari Ini
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                        <iconify-icon icon="lucide:link" class="text-brand-400"></iconify-icon>
                        Tautan
                    </h4>
                    <ul class="space-y-2.5">
                        <li><a href="#home" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Home</a></li>
                        <li><a href="#menu" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Menu</a></li>
                        <li><a href="#tentang" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Tentang Kami</a></li>
                        <li><a href="#kontak" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Kontak</a></li>
                        <li><a href="#" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Reservasi</a></li>
                        <li><a href="#" class="text-warm-400 hover:text-brand-400 text-sm transition-colors">Karir</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                        <iconify-icon icon="lucide:bell" class="text-brand-400"></iconify-icon>
                        Promo & Update
                    </h4>
                    <p class="text-warm-400 text-sm mb-4">Dapatkan info promo terbaru langsung di inbox Anda.</p>
                    <form id="newsletter-form" class="flex gap-2">
                        <input type="email" placeholder="Email Anda" class="flex-1 px-4 py-2.5 bg-warm-800 border border-warm-700 rounded-xl text-sm text-white placeholder:text-warm-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all">
                        <button type="submit" class="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-semibold transition-colors flex-shrink-0">
                            <iconify-icon icon="lucide:send" class="text-base"></iconify-icon>
                        </button>
                    </form>
                </div>
            </div>

            <div class="pt-8 border-t border-warm-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-warm-500 text-xs">&copy; 2026 Abidzar. Semua hak dilindungi.</p>
                <div class="flex items-center gap-4 text-warm-500 text-xs">
                    <a href="#" class="hover:text-brand-400 transition-colors">Kebijakan Privasi</a>
                    <span>•</span>
                    <a href="#" class="hover:text-brand-400 transition-colors">Syarat & Ketentuan</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ===================== CART DRAWER ===================== -->
    <div id="cart-overlay" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] hidden opacity-0 transition-opacity duration-300"></div>
    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[95] shadow-2xl transform translate-x-full transition-transform duration-300 ease-out flex flex-col">
        <div class="flex items-center justify-between p-6 border-b border-warm-200">
            <h3 class="font-serif text-xl font-bold text-warm-900 flex items-center gap-2">
                <iconify-icon icon="lucide:shopping-bag" class="text-brand-600"></iconify-icon>
                Keranjang
            </h3>
            <button id="cart-close" class="p-2 rounded-lg hover:bg-warm-100 transition-colors">
                <iconify-icon icon="lucide:x" class="text-xl text-warm-500"></iconify-icon>
            </button>
        </div>
        <div id="cart-items" class="flex-1 overflow-y-auto p-6">
            <div id="cart-empty" class="text-center py-16">
                <iconify-icon icon="lucide:shopping-bag" class="text-6xl text-warm-200 mb-4"></iconify-icon>
                <p class="text-warm-400 text-sm">Keranjang masih kosong</p>
                <p class="text-warm-300 text-xs mt-1">Yuk pilih menu favoritmu!</p>
            </div>
            <div id="cart-list" class="space-y-4 hidden"></div>
        </div>
        <div id="cart-footer" class="hidden border-t border-warm-200 p-6 bg-warm-50">
            <div class="flex items-center justify-between mb-4">
                <span class="text-warm-600 text-sm font-medium">Total</span>
                <span id="cart-total" class="text-xl font-bold text-warm-900">Rp 0</span>
            </div>
            <button id="checkout-btn" class="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-600/25 transition-all duration-200 flex items-center justify-center gap-2">
                <iconify-icon icon="lucide:credit-card" class="text-lg"></iconify-icon>
                Checkout
            </button>
        </div>
    </div>


    <!-- ===================== JAVASCRIPT ===================== -->
    <script>
    // ============================================================
    // DATA MENU — Gambar dari Unsplash sesuai makanan/minuman
    // Ubah/tambah data di sini untuk mengubah menu yang tampil
    // ============================================================
    const menuData = [
        {
            id: 1,
            nama: "Nasi Goreng Spesial",
            deskripsi: "Nasi goreng dengan telur mata sapi, ayam suwir, dan kerupuk udang pilihan",
            harga: 35000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&auto=format",
            badge: "Best Seller"
        },
        {
            id: 2,
            nama: "Ayam Bakar Madu",
            deskripsi: "Ayam kampung bakar dengan saus madu khas, disajikan dengan sambal dan lalapan",
            harga: 42000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 3,
            nama: "Rendang Sapi",
            deskripsi: "Rendang daging sapi empuk dimasak dengan rempah tradisional Minang selama 4 jam",
            harga: 55000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&auto=format",
            badge: "Premium"
        },
        {
            id: 4,
            nama: "Sate Ayam",
            deskripsi: "10 tusuk sate ayam dengan bumbu kacang khas dan lontong sayur",
            harga: 30000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 5,
            nama: "Ikan Bakar Jimbaran",
            deskripsi: "Ikan kakap bakar dengan bumbu Bali yang kaya rempah dan sambal matah",
            harga: 65000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&auto=format",
            badge: "Chef's Choice"
        },
        {
            id: 6,
            nama: "Mie Goreng Seafood",
            deskripsi: "Mie goreng spesial dengan udang, cumi, dan sayuran segar pilihan",
            harga: 38000,
            kategori: "makanan-utama",
            gambar: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 7,
            nama: "Es Teh Manis",
            deskripsi: "Teh manis dingin yang menyegarkan, dibuat dari teh pilihan berkualitas",
            harga: 8000,
            kategori: "minuman",
            gambar: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 8,
            nama: "Jus Alpukat",
            deskripsi: "Jus alpukat segar dengan susu coklat dan sirup gula aren asli",
            harga: 18000,
            kategori: "minuman",
            gambar: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop&auto=format",
            badge: "Favorit"
        },
        {
            id: 9,
            nama: "Kopi Susu Abidzar",
            deskripsi: "Es kopi susu dengan espresso robusta dan susu segar, manis creamy",
            harga: 22000,
            kategori: "minuman",
            gambar: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&auto=format",
            badge: "Best Seller"
        },
        {
            id: 10,
            nama: "Smoothie Mangga",
            deskripsi: "Smoothie mangga harum manis segar dengan yogurt dan madu alami",
            harga: 25000,
            kategori: "minuman",
            gambar: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 11,
            nama: "Es Krim Kelapa",
            deskripsi: "Es krim homemade rasa kelapa dengan topping kelapa parut dan gula aren",
            harga: 20000,
            kategori: "dessert",
            gambar: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 12,
            nama: "Puding Coklat",
            deskripsi: "Puding coklat lembut dengan vla vanilla dan saus caramel yang nikmat",
            harga: 15000,
            kategori: "dessert",
            gambar: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 13,
            nama: "Pisang Goreng Coklat",
            deskripsi: "Pisang raja goreng crispy dengan lelehan coklat Belga dan keju parut",
            harga: 22000,
            kategori: "dessert",
            gambar: "https://images.unsplash.com/photo-1600326145552-327f74b9c189?w=400&h=300&fit=crop&auto=format",
            badge: "Favorit"
        },
        {
            id: 14,
            nama: "Klepon Ubi",
            deskripsi: "Klepon dari ubi ungu dengan isian gula Jawa dan taburan kelapa segar",
            harga: 18000,
            kategori: "dessert",
            gambar: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 15,
            nama: "Tahu Crispy",
            deskripsi: "Tahu goreng renyah dengan bumbu tabur pedas dan saus sambal khas",
            harga: 15000,
            kategori: "snack",
            gambar: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 16,
            nama: "Tempe Mendoan",
            deskripsi: "Tempe mendoan tipis goreng renyah dengan saus kecap dan cabai rawit",
            harga: 12000,
            kategori: "snack",
            gambar: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 17,
            nama: "Lumpia Goreng",
            deskripsi: "Lumpia isi rebung dan udang segar, goreng hingga keemasan dan renyah",
            harga: 18000,
            kategori: "snack",
            gambar: "https://images.unsplash.com/photo-1606525437817-0574ed3e1047?w=400&h=300&fit=crop&auto=format",
            badge: null
        },
        {
            id: 18,
            nama: "Kentang Goreng",
            deskripsi: "Kentang goreng crinkle cut dengan saus sambal mayo dan keju leleh",
            harga: 20000,
            kategori: "snack",
            gambar: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&auto=format",
            badge: null
        }
    ];

    // ============================================================
    // STATE
    // ============================================================
    let currentCategory = 'all';
    let currentSearch = '';
    let currentView = 'grid';
    let cart = [];

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    function formatRupiah(angka) {
        return 'Rp ' + angka.toLocaleString('id-ID');
    }

    const kategoriLabel = {
        'makanan-utama': 'Makanan Utama',
        'minuman': 'Minuman',
        'dessert': 'Dessert',
        'snack': 'Snack'
    };

    const kategoriColor = {
        'makanan-utama': 'bg-red-100 text-red-700',
        'minuman': 'bg-blue-100 text-blue-700',
        'dessert': 'bg-pink-100 text-pink-700',
        'snack': 'bg-amber-100 text-amber-700'
    };

    // ============================================================
    // RENDER MENU
    // ============================================================
    function renderMenu() {
        const container = document.getElementById('menu-container');
        const emptyState = document.getElementById('empty-state');
        const resultCount = document.getElementById('result-count');

        let filtered = menuData.filter(item => {
            const matchCategory = currentCategory === 'all' || item.kategori === currentCategory;
            const matchSearch = item.nama.toLowerCase().includes(currentSearch.toLowerCase()) ||
                               item.deskripsi.toLowerCase().includes(currentSearch.toLowerCase());
            return matchCategory && matchSearch;
        });

        resultCount.innerHTML = `Menampilkan <span class="font-semibold text-warm-700">${filtered.length}</span> menu`;

        if (filtered.length === 0) {
            container.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }
        emptyState.classList.add('hidden');

        if (currentView === 'grid') {
            container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
        } else {
            container.className = 'flex flex-col gap-4';
        }

        container.innerHTML = filtered.map((item, index) => {
            return currentView === 'grid' ? renderGridCard(item, index) : renderListCard(item, index);
        }).join('');
    }

    // ============================================================
    // GRID CARD
    // ============================================================
    function renderGridCard(item, index) {
        const delay = index * 0.05;
        return `
        <div class="menu-card bg-white rounded-2xl border border-warm-200 overflow-hidden shadow-md shadow-warm-200/20 opacity-0 animate-fade-in-up" style="animation-delay: ${delay}s">
            <div class="relative h-48 overflow-hidden">
                <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
                <div class="absolute top-3 left-3">
                    <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase ${kategoriColor[item.kategori]}">
                        ${kategoriLabel[item.kategori]}
                    </span>
                </div>
                ${item.badge ? `
                <div class="absolute top-3 right-3">
                    <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-brand-600 text-white shadow-md">
                        ${item.badge}
                    </span>
                </div>` : ''}
            </div>
            <div class="p-5">
                <h3 class="font-serif text-lg font-bold text-warm-900 mb-1.5 line-clamp-1">${item.nama}</h3>
                <p class="text-warm-500 text-sm leading-relaxed mb-4 line-clamp-2">${item.deskripsi}</p>
                <div class="flex items-center justify-between">
                    <span class="text-brand-600 font-bold text-lg">${formatRupiah(item.harga)}</span>
                    <button onclick="addToCart(${item.id})" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg shadow-sm shadow-brand-600/20 transition-all duration-200 hover:shadow-md hover:shadow-brand-600/30 active:scale-95">
                        <iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon>
                        Pesan
                    </button>
                </div>
            </div>
        </div>`;
    }

    // ============================================================
    // LIST CARD
    // ============================================================
    function renderListCard(item, index) {
        const delay = index * 0.03;
        return `
        <div class="menu-card list-view bg-white rounded-2xl border border-warm-200 overflow-hidden shadow-md shadow-warm-200/20 flex flex-col sm:flex-row opacity-0 animate-fade-in-up" style="animation-delay: ${delay}s">
            <div class="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
                ${item.badge ? `
                <div class="absolute top-3 left-3">
                    <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-brand-600 text-white shadow-md">
                        ${item.badge}
                    </span>
                </div>` : ''}
            </div>
            <div class="flex-1 p-5 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase ${kategoriColor[item.kategori]}">
                            ${kategoriLabel[item.kategori]}
                        </span>
                    </div>
                    <h3 class="font-serif text-lg font-bold text-warm-900 mb-1.5">${item.nama}</h3>
                    <p class="text-warm-500 text-sm leading-relaxed">${item.deskripsi}</p>
                </div>
                <div class="flex items-center justify-between mt-4 pt-4 border-t border-warm-100">
                    <span class="text-brand-600 font-bold text-lg">${formatRupiah(item.harga)}</span>
                    <button onclick="addToCart(${item.id})" class="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg shadow-sm shadow-brand-600/20 transition-all duration-200 hover:shadow-md hover:shadow-brand-600/30 active:scale-95">
                        <iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>`;
    }

    // ============================================================
    // CART FUNCTIONS
    // ============================================================
    function addToCart(id) {
        const item = menuData.find(m => m.id === id);
        if (!item) return;
        const existing = cart.find(c => c.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        updateCartUI();
        showToast(`${item.nama} ditambahkan ke keranjang!`);
    }

    function removeFromCart(id) {
        cart = cart.filter(c => c.id !== id);
        updateCartUI();
    }

    function changeQty(id, delta) {
        const item = cart.find(c => c.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
        updateCartUI();
    }

    function updateCartUI() {
        const badge = document.getElementById('cart-badge');
        const cartList = document.getElementById('cart-list');
        const cartEmpty = document.getElementById('cart-empty');
        const cartFooter = document.getElementById('cart-footer');
        const cartTotal = document.getElementById('cart-total');

        const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
        const totalPrice = cart.reduce((sum, c) => sum + (c.harga * c.qty), 0);

        badge.textContent = totalItems;
        if (totalItems > 0) {
            badge.classList.remove('opacity-0');
            badge.classList.add('badge-pulse');
            setTimeout(() => badge.classList.remove('badge-pulse'), 350);
        } else {
            badge.classList.add('opacity-0');
        }

        if (cart.length === 0) {
            cartEmpty.classList.remove('hidden');
            cartList.classList.add('hidden');
            cartFooter.classList.add('hidden');
        } else {
            cartEmpty.classList.add('hidden');
            cartList.classList.remove('hidden');
            cartFooter.classList.remove('hidden');

            cartList.innerHTML = cart.map(item => `
                <div class="flex gap-4 p-3 bg-warm-50 rounded-xl">
                    <img src="${item.gambar}" alt="${item.nama}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-sm text-warm-900 truncate">${item.nama}</h4>
                        <p class="text-brand-600 text-sm font-bold">${formatRupiah(item.harga)}</p>
                        <div class="flex items-center gap-2 mt-1.5">
                            <button onclick="changeQty(${item.id}, -1)" class="w-7 h-7 bg-white border border-warm-200 rounded-md flex items-center justify-center text-warm-600 hover:bg-warm-100 transition-colors">
                                <iconify-icon icon="lucide:minus" class="text-xs"></iconify-icon>
                            </button>
                            <span class="text-sm font-semibold text-warm-800 w-6 text-center">${item.qty}</span>
                            <button onclick="changeQty(${item.id}, 1)" class="w-7 h-7 bg-white border border-warm-200 rounded-md flex items-center justify-center text-warm-600 hover:bg-warm-100 transition-colors">
                                <iconify-icon icon="lucide:plus" class="text-xs"></iconify-icon>
                            </button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="self-start p-1 text-warm-400 hover:text-red-500 transition-colors">
                        <iconify-icon icon="lucide:trash-2" class="text-sm"></iconify-icon>
                    </button>
                </div>
            `).join('');

            cartTotal.textContent = formatRupiah(totalPrice);
        }
    }

    // ============================================================
    // TOAST NOTIFICATION
    // ============================================================
    function showToast(message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast-in pointer-events-auto flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl shadow-xl shadow-warm-300/30 border border-warm-200 max-w-sm';
        toast.innerHTML = `
            <div class="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="lucide:check" class="text-brand-600 text-sm"></iconify-icon>
            </div>
            <p class="text-sm text-warm-700 font-medium">${message}</p>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.remove('toast-in');
            toast.classList.add('toast-out');
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

    // ============================================================
    // EVENT LISTENERS
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {

        renderMenu();

        // --- SEARCH ---
        const searchInput = document.getElementById('search-input');
        const searchClear = document.getElementById('search-clear');

        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            searchClear.classList.toggle('hidden', currentSearch === '');
            renderMenu();
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            currentSearch = '';
            searchClear.classList.add('hidden');
            renderMenu();
            searchInput.focus();
        });

        // --- FILTER KATEGORI ---
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
                    b.classList.add('bg-warm-100', 'text-warm-600');
                });
                btn.classList.remove('bg-warm-100', 'text-warm-600');
                btn.classList.add('bg-brand-600', 'text-white', 'shadow-sm');
                currentCategory = btn.dataset.category;
                renderMenu();
            });
        });

        // --- VIEW TOGGLE ---
        const gridBtn = document.getElementById('grid-view-btn');
        const listBtn = document.getElementById('list-view-btn');

        gridBtn.addEventListener('click', () => {
            currentView = 'grid';
            gridBtn.classList.add('bg-white', 'shadow-sm', 'text-brand-600');
            gridBtn.classList.remove('text-warm-400');
            listBtn.classList.remove('bg-white', 'shadow-sm', 'text-brand-600');
            listBtn.classList.add('text-warm-400');
            renderMenu();
        });

        listBtn.addEventListener('click', () => {
            currentView = 'list';
            listBtn.classList.add('bg-white', 'shadow-sm', 'text-brand-600');
            listBtn.classList.remove('text-warm-400');
            gridBtn.classList.remove('bg-white', 'shadow-sm', 'text-brand-600');
            gridBtn.classList.add('text-warm-400');
            renderMenu();
        });

        // --- MOBILE MENU ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuIcon.setAttribute('icon', isOpen ? 'lucide:menu' : 'lucide:x');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('icon', 'lucide:menu');
            });
        });

        // --- NAVBAR SCROLL ---
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-warm-200/20', 'border-b', 'border-warm-200/50');
            } else {
                navbar.classList.remove('bg-white/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-warm-200/20', 'border-b', 'border-warm-200/50');
            }
        });

        // --- CART DRAWER ---
        const cartBtn = document.getElementById('cart-btn');
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        const cartClose = document.getElementById('cart-close');

        function openCart() {
            cartOverlay.classList.remove('hidden');
            requestAnimationFrame(() => {
                cartOverlay.classList.remove('opacity-0');
                cartDrawer.classList.remove('translate-x-full');
            });
        }

        function closeCart() {
            cartOverlay.classList.add('opacity-0');
            cartDrawer.classList.add('translate-x-full');
            setTimeout(() => cartOverlay.classList.add('hidden'), 300);
        }

        cartBtn.addEventListener('click', openCart);
        cartClose.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);

        // --- CHECKOUT ---
        document.getElementById('checkout-btn').addEventListener('click', () => {
            const total = cart.reduce((sum, c) => sum + (c.harga * c.qty), 0);
            showToast(`Checkout berhasil! Total: ${formatRupiah(total)}`);
            cart = [];
            updateCartUI();
            closeCart();
        });

        // --- NEWSLETTER ---
        document.getElementById('newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Terima kasih! Anda berhasil berlangganan newsletter.');
            e.target.reset();
        });

    });
    </script>

</body>
</html>
