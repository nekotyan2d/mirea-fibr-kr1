const contactUsBtn = document.getElementById("contactUs");
const contactUsDialog = document.getElementById("contactUsDialog");
const contactUsForm = document.getElementById("contactUsForm");
const closeDialogBtn = document.getElementById("closeDialogBtn");

contactUsBtn.addEventListener("click", () => {
    contactUsDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    contactUsDialog.close();
});
contactUsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactUsForm);

    const data = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        category: formData.get("category"),
        message: formData.get("message"),
    };

    console.log(data);

    contactUsDialog.close();
    contactUsForm.reset();
});
