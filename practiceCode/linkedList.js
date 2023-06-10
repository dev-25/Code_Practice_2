
// 4, 5, 6, 7, 8, 9
// 11, 12, 13, 6, 7, 8, 9
// These two are linkedList, Find point of common element?
// Logic for above problem?
// What will be the complexity for it?

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function getIntersectionNode(headA, headB) {
    let currA = headA;
    let currB = headB;
    let lenA = 0;
    let lenB = 0;
  
    // Calculate the lengths of both lists
    while (currA !== null) {
      lenA++;
      currA = currA.next;
    }
  
    while (currB !== null) {
      lenB++;
      currB = currB.next;
    }
  
    // Move the pointer of the longer list forward
    currA = headA;
    currB = headB;
    if (lenA > lenB) {
      for (let i = 0; i < lenA - lenB; i++) {
        currA = currA.next;
      }
    } else {
      for (let i = 0; i < lenB - lenA; i++) {
        currB = currB.next;
      }
    }
  
    // Iterate through both lists to find the point of intersection
    while (currA !== null && currB !== null) {
      if (currA === currB) {
        return currA;
      }
      currA = currA.next;
      currB = currB.next;
    }
  
    // No intersection found
    return null;
  }
  
  // Example usage
  // Creating the linked lists
  const list1 = new ListNode(4);
  list1.next = new ListNode(5);
  list1.next.next = new ListNode(6);
  list1.next.next.next = new ListNode(7);
  list1.next.next.next.next = new ListNode(8);
  list1.next.next.next.next.next = new ListNode(9);
  
  const list2 = new ListNode(11);
  list2.next = new ListNode(12);
  list2.next.next = new ListNode(13);
  list2.next.next.next = list1.next.next; // Point of intersection
  
  // Finding the point of intersection
  const intersectionNode = getIntersectionNode(list1, list2);
  
  if (intersectionNode !== null) {
    console.log(`Point of intersection: ${intersectionNode.val}`);
  } else {
    console.log("No intersection found.");
  }
  