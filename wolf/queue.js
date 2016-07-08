'use strict'

function EventQueue() {
  this.queue = [];
}

EventQueue.prototype.add = function (ev, user_id, priority) {
  this.queue.push({
    event: ev,
    user_id: user_id,
    priority: priority
  });
};

module.exports = EventQueue;
