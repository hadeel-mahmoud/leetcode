/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
  let current = head;
  while (current && current.next) {
    head = head.next;
    current = current.next.next;
    if (head === current) return true;
  }
  return false;

};