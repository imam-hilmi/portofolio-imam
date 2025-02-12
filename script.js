// // Interaki (efek hover)
// const proyek = document.querySelectorAll(".proyek");

// proyek.forEach(proyekItem => { // proyekItem => menggunakan nama variabel yang berbeda di dalam foreach
//     proyekItem.addEventListener('mouseover', () => {
//         proyekItem.style.transform = 'scale(1.05)';
//     }) ;

//     proyekItem.addEventListener('mouseout', () => {
//         proyekItem.style.transform = 'scale(1)';
//     });
// });

// Menampilkan konten yand disembunyikan menggunakan event listener
document.getElementById('show-more-btn').addEventListener('click', function() {
    const moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Lebih sedikit';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Selengkapnya';
    };
});