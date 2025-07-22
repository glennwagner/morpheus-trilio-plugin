// instanceTab.js
(function() {
  'use strict';

  // Log the script's full URL
  var scriptElem = document.currentScript ||
                   Array.from(document.getElementsByTagName('script'))
                        .find(s => s.src && s.src.endsWith('instanceTab.js'));
  var scriptSrc = scriptElem ? scriptElem.src : 'UNKNOWN';
  console.log('[instanceTab.js] loaded from:', scriptSrc);

  // Check for instanceId
  if (!window.INSTANCE_ID) {
    console.error('[instanceTab.js] ERROR: INSTANCE_ID is not defined on window');
    return;
  }
  var instanceId = window.INSTANCE_ID;
  console.log('[instanceTab.js] instanceId =', instanceId);

  // Utility to show alerts
  function showAlert(type, message) {
    console.log('[instanceTab.js] showAlert:', type, message);
    // ... your existing alert DOM logic here ...
  }

  // Initialize DataTable
  $(document).ready(function() {
    console.log('[instanceTab.js] Document ready — initializing DataTable');
    var table = $('#snapshotsTable').DataTable({
      ajax: {
        url: '/api/instances/' + encodeURIComponent(instanceId) + '/snapshots',
        dataSrc: 'snapshots',
        beforeSend: function() {
          console.log('[instanceTab.js] Fetching snapshots for instance', instanceId);
        }
      },
      columns: [
        { data: 'created_at', render: function(ts) {
            console.log('[instanceTab.js] render created_at:', ts);
            return moment(ts).format('MM/DD/YYYY hh:mm:ss A');
          }
        },
        { data: 'name' },
        { data: 'description' },
        { data: 'status' },
        { data: 'snapshot_type' },
        { data: 'size', render: function(sz) {
            console.log('[instanceTab.js] render size:', sz);
            return sz;
          }
        },
        { data: 'id', orderable: false, render: function(id) {
            console.log('[instanceTab.js] render actions for id:', id);
            return `
              <button class="restoreSnapshotBtn btn btn-sm btn-warning" data-id="${id}">Restore</button>
              <button class="deleteSnapshotBtn btn btn-sm btn-danger ml-1" data-id="${id}">Delete</button>
            `;
          }
        }
      ]
    });

    // Create Snapshot
    $('#createSnapshotBtn').on('click', function() {
      console.log('[instanceTab.js] Create Snapshot clicked');
      $.post('/api/instances/' + encodeURIComponent(instanceId) + '/snapshots', {}, function(resp) {
        console.log('[instanceTab.js] snapshot created:', resp);
        table.ajax.reload();
        showAlert('success', 'Snapshot created successfully');
      }).fail(function(err) {
        console.error('[instanceTab.js] failed to create snapshot:', err);
        showAlert('danger', 'Failed to create snapshot');
      });
    });

    // Restore Snapshot
    $('#snapshotsTable').on('click', '.restoreSnapshotBtn', function() {
      var snapId = $(this).data('id');
      console.log('[instanceTab.js] Restore clicked for snapshot', snapId);
      $.post('/api/snapshots/' + snapId + '/restore', function(resp) {
        console.log('[instanceTab.js] restore response:', resp);
        showAlert('success', 'Restore initiated');
      }).fail(function(err) {
        console.error('[instanceTab.js] restore failed:', err);
        showAlert('danger', 'Restore failed');
      });
    });

    // Delete Snapshot
    $('#snapshotsTable').on('click', '.deleteSnapshotBtn', function() {
      var snapId = $(this).data('id');
      console.log('[instanceTab.js] Delete clicked for snapshot', snapId);
      if (!confirm('Are you sure you want to delete snapshot ' + snapId + '?')) {
        console.log('[instanceTab.js] Delete cancelled by user');
        return;
      }
      $.ajax({
        url: '/api/snapshots/' + snapId,
        type: 'DELETE',
        success: function(resp) {
          console.log('[instanceTab.js] delete response:', resp);
          table.ajax.reload();
          showAlert('success', 'Snapshot deleted');
        },
        error: function(err) {
          console.error('[instanceTab.js] delete failed:', err);
          showAlert('danger', 'Delete failed');
        }
      });
    });

  });
})();

