document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;

  Swal.fire({
    title: "Hello " + name,
    text: "Terima Kasih Telah Menggunakan Loruki",
    icon: "success",
  });
});
