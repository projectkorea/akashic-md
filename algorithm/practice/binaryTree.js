/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // 1. 트리 구조의 데이터 구조
 // 2. 각 노드는 parent 노드를 기억해야함
 // 3. 재귀로 접근
 // 4. subtree left right 차이가 1을 넘는지 확인
 // 5. 높이값을 계산해야함 -> 자식 노드들이 가져와야

 /**
  * 
  * @param {} rootNode 
  * @returns [boolean, number] isBalanced, height 
  */

var isBalancedDFS = function(rootNode) {
    function calcHeight(node) {
        if (node === null) {
            return 0;
        }
        let leftHeight = calcHeight(node.left);
        let rightHeight = calcHeight(node.right);
        const isUnbalanced = leftHeight === -1 || rightHeight === -1;

        if (Math.abs(leftHeight - rightHeight) > 1 || isUnbalanced) {
            // 1.현재 노드의 서브트리 높이 차이가 1을 초과하는 경우
            // 2. 서브트리 중 하나가 이미 불균형인 경우
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return calcHeight(rootNode) !== -1;
};





var isBalancedBFS = function (root) {
    if (!root) return true;

    // 큐 초기화: 루트 노드를 큐에 추가
    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        
        // 현재 노드의 서브트리 높이를 계산
        let leftHeight = calcHeight(currentNode.left);
        let rightHeight = calcHeight(currentNode.right);

        // 서브트리 높이 차이가 1을 초과하면 트리는 불균형
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        // 왼쪽 자식 노드가 있으면 큐에 추가
        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        
        // 오른쪽 자식 노드가 있으면 큐에 추가
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }
    }

    // 현재 노드에서 서브트리의 높이를 계산하는 함수
    function calcHeight(node) {
        if (!node) return 0;

        // 큐 초기화: 시작 노드를 큐에 추가
        let nodeQueue = [node];
        let height = 0;

        while (nodeQueue.length > 0) {
            let levelSize = nodeQueue.length;
            for (let i = 0; i < levelSize; i++) {
                let currentNode = nodeQueue.shift();
                if (currentNode.left !== null) nodeQueue.push(currentNode.left);
                if (currentNode.right !== null) nodeQueue.push(currentNode.right);
            }
            height++;
        }
        return height;
    }

    return true;
};
