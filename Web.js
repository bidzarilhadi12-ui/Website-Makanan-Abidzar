/* ============================================================
   SCRIPT.JS — Abidzar Restaurant Website
   Logika: data menu, render, search, filter, cart, dll.
   ============================================================ */

// ============================================================
// DATA MENU (Array of Objects)
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
// STATE MANAGEMENT
// Variabel yang menyimpan state aplikasi saat ini
// ============================================================
let currentCategory = 'all';       // Kategori filter aktif
let currentSearch = '';             // Kata kunci pencarian
let currentView = 'grid';          // Mode tampilan: 'grid' atau 'list'
let cart = [];                      // Array keranjang belanja

// ============================================================
// HELPER FUNCTIONS
// Fungsi bantu yang dipakai berulang kali
// ============================================================

/**
 * Format angka menjadi format Rupiah Indonesia
 * Contoh: 35000 → "Rp 35.000"
 */
function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID');
}

/**
 * Mapping label kategori (slug → nama tampilan)
 */
const kategoriLabel = {
    'makanan-utama': 'Makanan Utama',
    'minuman': 'Minuman',
    'dessert': 'Dessert',
    'snack': 'Snack'
};

/**
 * Mapping warna badge per kategori
 */
const kategoriColor = {
    'makanan-utama': 'bg-red-100 text-red-700',
    'minuman': 'bg-blue-100 text-blue-700',
    'dessert': 'bg-pink-100 text-pink-700',
    'snack': 'bg-amber-100 text-amber-700'
};

// ============================================================
// RENDER MENU
// Memfilter data lalu merender card ke DOM
// ============================================================
function renderMenu() {
    const container = document.getElementById('menu-container');
    const emptyState = document.getElementById('empty-state');
    const resultCount = document.getElementById('result-count');

    // Filter berdasarkan kategori dan kata kunci pencarian
    let filtered = menuData.filter(item => {
        const matchCategory = currentCategory === 'all' || item.kategori === currentCategory;
        const matchSearch = item.nama.toLowerCase().includes(currentSearch.toLowerCase()) ||
                           item.deskripsi.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Update teks jumlah hasil
    resultCount.innerHTML = `Menampilkan <span class="font-semibold text-warm-700">${filtered.length}</span> menu`;

    // Tampilkan empty state jika tidak ada hasil
    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    // Set class layout berdasarkan view mode
    if (currentView === 'grid') {
        container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    } else {
        container.className = 'flex flex-col gap-4';
    }

    // Render setiap card dengan template yang sesuai view mode
    container.innerHTML = filtered.map((item, index) => {
        return currentView === 'grid' ? renderGridCard(item, index) : renderListCard(item, index);
    }).join('');
}

// ============================================================
// GRID CARD TEMPLATE
// Template HTML untuk tampilan grid (card vertikal)
// ============================================================
function renderGridCard(item, index) {
    const delay = index * 0.05; // Staggered animation delay
    return `
    <div class="menu-card bg-white rounded-2xl border border-warm-200 overflow-hidden shadow-md shadow-warm-200/20 opacity-0 animate-fade-in-up" style="animation-delay: ${delay}s">
        <!-- Gambar makanan -->
        <div class="relative h-48 overflow-hidden">
            <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
            <!-- Badge kategori di kiri atas -->
            <div class="absolute top-3 left-3">
                <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase ${kategoriColor[item.kategori]}">
                    ${kategoriLabel[item.kategori]}
                </span>
            </div>
            <!-- Badge khusus (Best Seller, Premium, dll) di kanan atas -->
            ${item.badge ? `
            <div class="absolute top-3 right-3">
                <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-brand-600 text-white shadow-md">
                    ${item.badge}
                </span>
            </div>` : ''}
        </div>
        <!-- Konten card -->
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
// LIST CARD TEMPLATE
// Template HTML untuk tampilan list (card horizontal)
// ============================================================
function renderListCard(item, index) {
    const delay = index * 0.03;
    return `
    <div class="menu-card list-view bg-white rounded-2xl border border-warm-200 overflow-hidden shadow-md shadow-warm-200/20 flex flex-col sm:flex-row opacity-0 animate-fade-in-up" style="animation-delay: ${delay}s">
        <!-- Gambar di sisi kiri -->
        <div class="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
            <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
            ${item.badge ? `
            <div class="absolute top-3 left-3">
                <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-brand-600 text-white shadow-md">
                    ${item.badge}
                </span>
            </div>` : ''}
        </div>
        <!-- Konten di sisi kanan -->
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
// KERANJANG (CART) FUNCTIONS
// Menambah, menghapus, mengubah jumlah item di keranjang
// ============================================================

/**
 * Menambahkan item ke keranjang.
 * Jika sudah ada, tambah qty-nya.
 */
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

/**
 * Menghapus item dari keranjang berdasarkan ID
 */
function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

/**
 * Mengubah jumlah item di keranjang (+1 atau -1)
 * Jika qty <= 0, item otomatis dihapus
 */
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

/**
 * Memperbarui seluruh UI keranjang:
 * badge, daftar item, total harga, dan empty state
 */
function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const cartList = document.getElementById('cart-list');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
    const totalPrice = cart.reduce((sum, c) => sum + (c.harga * c.qty), 0);

    // Update badge jumlah item
    badge.textContent = totalItems;
    if (totalItems > 0) {
        badge.classList.remove('opacity-0');
        badge.classList.add('badge-pulse');
        setTimeout(() => badge.classList.remove('badge-pulse'), 350);
    } else {
        badge.classList.add('opacity-0');
    }

    // Update konten drawer keranjang
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
// Menampilkan notifikasi singkat di pojok kanan atas
// ============================================================

/**
 * Menampilkan toast notifikasi
 * @param {string} message - Pesan yang ditampilkan
 */
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

    // Hapus toast setelah 2.5 detik
    setTimeout(() => {
        toast.classList.remove('toast-in');
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================================
// EVENT LISTENERS
// Semua interaksi user: search, filter, toggle, cart, dll
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // Render menu pertama kali
    renderMenu();

    // ==================== SEARCH BAR ====================
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    // Input pencarian: filter real-time saat mengetik
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        searchClear.classList.toggle('hidden', currentSearch === '');
        renderMenu();
    });

    // Tombol clear pencarian
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        searchClear.classList.add('hidden');
        renderMenu();
        searchInput.focus();
    });

    // ==================== FILTER KATEGORI ====================
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset semua tombol ke state tidak aktif
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
                b.classList.add('bg-warm-100', 'text-warm-600');
            });
            // Aktifkan tombol yang diklik
            btn.classList.remove('bg-warm-100', 'text-warm-600');
            btn.classList.add('bg-brand-600', 'text-white', 'shadow-sm');

            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // ==================== VIEW TOGGLE (Grid/List) ====================
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

    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuIcon.setAttribute('icon', isOpen ? 'lucide:menu' : 'lucide:x');
    });

    // Tutup mobile menu saat klik link navigasi
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('icon', 'lucide:menu');
        });
    });

    // ==================== NAVBAR SCROLL EFFECT ====================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Navbar solid + blur saat scroll
            navbar.classList.add('bg-white/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-warm-200/20', 'border-b', 'border-warm-200/50');
        } else {
            // Navbar transparan di atas
            navbar.classList.remove('bg-white/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-warm-200/20', 'border-b', 'border-warm-200/50');
        }
    });

    // ==================== CART DRAWER ====================
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');

    /** Buka drawer keranjang dari kanan */
    function openCart() {
        cartOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            cartOverlay.classList.remove('opacity-0');
            cartDrawer.classList.remove('translate-x-full');
        });
    }

    /** Tutup drawer keranjang */
    function closeCart() {
        cartOverlay.classList.add('opacity-0');
        cartDrawer.classList.add('translate-x-full');
        setTimeout(() => cartOverlay.classList.add('hidden'), 300);
    }

    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // ==================== CHECKOUT ====================
    document.getElementById('checkout-btn').addEventListener('click', () => {
        const total = cart.reduce((sum, c) => sum + (c.harga * c.qty), 0);
        showToast(`Checkout berhasil! Total: ${formatRupiah(total)}`);
        cart = [];
        updateCartUI();
        closeCart();
    });

    // ==================== NEWSLETTER FORM ====================
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Terima kasih! Anda berhasil berlangganan newsletter.');
        e.target.reset();
    });

}); // end DOMContentLoaded
