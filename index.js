const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Abi, ContractPromise } = require('@polkadot/api-contract');

// Create an instance of the Polkadot API using a WebSocket provider
const wsProvider = new WsProvider('ws://localhost:9944');
async function main(){
const api = await ApiPromise.create({ provider: wsProvider });
// Create a new keyring pair to use as the contract's caller
const aliceaddress="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
// Set the contract address and ABI
const contractAddress = '5H7zdNt5H8sjcW6vQn8Mtxmcnb2jUeh6fWkRaK9ZMbeQhWGK';
const contractAbi = {
  "source": {
    "hash": "0x62af36ccf8a2e9f12c75493e7da9cde37b2b841d8364c4d4d7a148e2ac4995bf",
    "language": "ink! 4.0.1",
    "compiler": "rustc 1.68.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "2.1.0",
      "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "flipper",
    "version": "0.1.0",
    "authors": [
      "[your_name] <[your_email]>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "init_value",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          "Constructor that initializes the `bool` value to the given `init_value`."
        ],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 1
        },
        "selector": "0x9bae9d5e"
      },
      {
        "args": [],
        "docs": [
          "Constructor that initializes the `bool` value to `false`.",
          "",
          "Constructors can delegate to other constructors."
        ],
        "label": "default",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 1
        },
        "selector": "0xed4b9d1b"
      }
    ],
    "docs": [],
    "events": [],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 3
    },
    "messages": [
      {
        "args": [],
        "docs": [
          " A message that can be called on instantiated contracts.",
          " This one flips the value of the stored `bool` from `true`",
          " to `false` and vice versa."
        ],
        "label": "flip",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 1
        },
        "selector": "0x633aa551"
      },
      {
        "args": [],
        "docs": [
          " Simply returns the current value of our `bool`."
        ],
        "label": "get",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 4
        },
        "selector": "0x2f865bd9"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "value"
            }
          ],
          "name": "Flipper"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 2
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 2
          },
          {
            "name": "E",
            "type": 3
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 3
          }
        ],
        "path": [
          "Result"
        ]
      }
    }
  ],
  "version": "4"
};

const gasLimit=1234566;
const contract1=new ContractPromise(api,contractAbi,contractAddress);
const {result,output}=await contract1.query.flip(aliceaddress,{gasLimit});
console.log("jjjjjjjjjjjjjjjjjjjjjj",api.query.system.account); 
console.log("result",result?.toHuman());
console.log("output",output);
console.log("contract1.query.get------------",contract1.query);
}
main().catch(console.error());