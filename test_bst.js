// To run tests:
//     npm install nodeunit
//     node_modules/nodeunit/bin/nodeunit test_bst.js

var bst = require('./bst');

exports.testWalk = function(test) {
    var t = new bst.BST();
    test.deepEqual(t.walk('in'), []);

    t.insert(12,5,18,15,13,1,6);
    test.deepEqual(t.walk('pre'),
                   [12,5,1,6,18,15,13]);
    test.deepEqual(t.walk('in'),
                   [1,5,6,12,13,15,18]);
    test.deepEqual(t.walk('post'),
                   [1,6,5,13,15,18,12]);
    test.done();
} 

exports.testSearch = function(test) {
    var t = new bst.BST();
    test.equal(t.min().val, undefined);
    test.equal(t.max().val, undefined);
    test.equal(t.search(5).val, undefined);

    t.insert(12,5,18,15,13,1,6,4,3,2,19);
    test.equal(t.min().val, 1);
    test.equal(t.max().val, 19);
    test.equal();
    test.done();
} 