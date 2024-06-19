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

var isBalanced = function(rootNode) {
    function check(node){
        if (!node) {
            // 검사할 subtree없음
            return [true, 0]
        }

        const [leftBalanced, leftHeight] = check(node.left);
        const [rightBalanced, rightHeight] = check(node.right);

        if (leftBalanced && rightBalanced) {
            return [true, 0]
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return [true, 0]
        }
        return return [true, Math.max(leftHeight, rightHeight)+1]
        
    }

    return check(rootNode)[0]
};