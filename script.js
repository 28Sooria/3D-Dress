document.querySelectorAll('[id^="imageUpload"]').forEach((fileInput, index) => {
    const previewId = `imagePreview${index + 1}`;
    const previewElement = document.getElementById(previewId);

    fileInput.addEventListener('change', () => {
        previewElement.innerHTML = ''; // Clear previous content
        const file = fileInput.files[0];
        if (file) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = `Uploaded Image ${index + 1}`;
            previewElement.appendChild(img);
        } else {
            previewElement.innerHTML = `<p>Image ${index + 1}</p>`;
        }
    });
});
