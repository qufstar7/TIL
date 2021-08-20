const jsonTree = [
  {
    id: 1,
    name: "Yong",
    phone: "010-0000-0000",
    type: "sk",
    childnode: [
      {
        id: 11,
        name: "echo",
        phone: "010-0000-1111",
        type: "kt",
        childnode: [
          {
            id: 115,
            name: "hary",
            phone: "211-1111-0000",
            type: "sk",
            childnode: [
              {
                id: 1159,
                name: "pobi",
                phone: "010-444-000",
                type: "kt",
                childnode: [
                  {
                    id: 11592,
                    name: "cherry",
                    phone: "111-222-0000",
                    type: "lg",
                    childnode: [],
                  },
                  {
                    id: 11595,
                    name: "solvin",
                    phone: "010-000-3333",
                    type: "sk",
                    childnode: [],
                  },
                ],
              },
            ],
          },
          {
            id: 116,
            name: "kim",
            phone: "444-111-0200",
            type: "kt",
            childnode: [
              {
                id: 1168,
                name: "hani",
                phone: "010-222-0000",
                type: "sk",
                childnode: [
                  {
                    id: 11689,
                    name: "ho",
                    phone: "010-000-0000",
                    type: "kt",
                    childnode: [
                      {
                        id: 116890,
                        name: "wonsuk",
                        phone: "010-000-0000",
                        type: "kt",
                        childnode: [],
                      },
                      {
                        id: 1168901,
                        name: "chulsu",
                        phone: "010-0000-0000",
                        type: "sk",
                        childnode: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 117,
            name: "hong",
            phone: "010-0000-0000",
            type: "lg",
            childnode: [],
          },
        ],
      },
    ],
  },
];

// type이 sk인, name으로 구성된 배열만 출력
var findsk = function (tree, type, arr) {
  for (const key in tree) {
    var temp;
    if (key == "name") {
      temp = tree[key];
    }

    if (tree[key] == type) {
      arr.push(temp);
    }

    if (typeof tree[key] == "object") {
      findsk(tree[key], type, arr);
    }
  }

  return arr;
};

console.log(findsk((tree = jsonTree[0]), (type = "sk"), (arr = [])));

// 방법 2
function findsk2(jsonTree, result) {
  if (jsonTree.type == "sk") {
    result.push(jsonTree.name);
  }

  for (key in jsonTree) {
    if (typeof jsonTree[key] == "object") {
      findsk2(jsonTree[key], result);
    }
  }

  return result;
}

var result = [];

console.log(findsk2(jsonTree, result));
