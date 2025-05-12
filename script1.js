 const usersCtx = document.getElementById('usersChart').getContext('2d');
    new Chart(usersCtx, {
      type: 'bar',
      data: {
        labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Users Created',
          data: [16, 24, 21, 15, 12, 9, 17],
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
      }
    });

    const entriesCtx = document.getElementById('entriesChart').getContext('2d');
    new Chart(entriesCtx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `${30 - i} days ago`),
        datasets: [
          {
            label: 'Users',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40)),
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true
          },
          {
            label: 'Articles',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          },
          {
            label: 'Categories',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5)),
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: false
          },
          {
            label: 'Tags',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)),
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false
          }
        ]
      }
    });
