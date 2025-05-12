
    const pageForm = document.getElementById('pageForm');
    const pagesTable = document.querySelector('#pagesTable tbody');
    let editRow = null;

    pageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('pageTitle').value.trim();
      const slug = document.getElementById('pageSlug').value.trim();

      if (!title || !slug) return;

      if (editRow) {
        editRow.cells[0].innerText = title;
        editRow.cells[1].innerText = slug;
        editRow = null;
      } else {
        const row = pagesTable.insertRow();
        row.innerHTML = `
          <td>${title}</td>
          <td>${slug}</td>
          <td>
            <button class="btn-edit" onclick="editPage(this)">Edit</button>
            <button class="btn-delete" onclick="deletePage(this)">Delete</button>
          </td>
        `;
      }

      pageForm.reset();
    });

    function editPage(btn) {
      editRow = btn.closest('tr');
      document.getElementById('pageTitle').value = editRow.cells[0].innerText;
      document.getElementById('pageSlug').value = editRow.cells[1].innerText;
    }

    function deletePage(btn) {
      if (confirm('Are you sure you want to delete this page?')) {
        const row = btn.closest('tr');
        row.remove();
        if (editRow === row) editRow = null;
      }
    }
