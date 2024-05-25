document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mousemove', (e) => {
        const caption = wrapper.querySelector('.image-caption');
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        caption.style.left = `${x}px`;
        caption.style.top = `${y}px`;
        caption.style.opacity = 1;
    });
    wrapper.addEventListener('mouseleave', () => {
        const caption = wrapper.querySelector('.image-caption');
        caption.style.opacity = 0;
    });
});
