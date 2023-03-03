fetch('https://j6qnxz6anqfwidnn8bc17o4nmes5gz4o.oastify.com/data')
  .then(response => response.json())
  .then(data => {
    // xử lý dữ liệu trả về ở đây
    console.log(data);
  })
  .catch(error => console.error(error));
