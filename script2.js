const newsForm = document.getElementById('newsForm');
    const newsTable = document.querySelector('#newsTable tbody');
    let editRow = null;

    newsForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('newsTitle').value;
      const date = document.getElementById('newsDate').value;
      const status = document.getElementById('newsStatus').value;

      const statusBadge = `<span class="badge ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;

      if (editRow) {
        editRow.cells[0].innerText = title;
        editRow.cells[1].innerText = date;
        editRow.cells[2].innerHTML = statusBadge;
        editRow = null;
      } else {
        const row = newsTable.insertRow();
        row.innerHTML = `
          <td>${title}</td>
          <td>${date}</td>
          <td>${statusBadge}</td>
          <td>
            <button class="btn-edit" onclick="editNews(this)">Edit</button>
            <button class="btn-delete" onclick="deleteNews(this)">Delete</button>
          </td>
        `;
      }

      newsForm.reset();
    });

    function editNews(btn) {
      editRow = btn.closest('tr');
      document.getElementById('newsTitle').value = editRow.cells[0].innerText;
      document.getElementById('newsDate').value = editRow.cells[1].innerText;
      const statusSpan = editRow.cells[2].querySelector('span');
      document.getElementById('newsStatus').value = statusSpan.classList.contains('published') ? 'published' : 'draft';
    }

    function deleteNews(btn) {
      if (confirm('Are you sure you want to delete this news item?')) {
        const row = btn.closest('tr');
        row.remove();
      }
    }