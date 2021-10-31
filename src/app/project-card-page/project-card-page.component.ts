import { Component, OnInit } from '@angular/core';
import {Project} from "../project-card/project-card.component";
import {ActivatedRoute, Router} from "@angular/router";
import Web3 from 'web3';
import {AbiItem} from 'web3-utils';

@Component({
  selector: 'app-project-card-page',
  templateUrl: './project-card-page.component.html',
  styleUrls: ['./project-card-page.component.css']
})
export class ProjectCardPageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/7d38d692acfd400f9cc0dc0a36df0e0e'));
    const contractAddress = '0x8f0cC9E0aBc8C2357638A5ffAb88fD16120d2D76';

    const myAbi: AbiItem[] = [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'from',
            'type': 'address'
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'to',
            'type': 'address'
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256'
          }
        ],
        'name': 'Payout',
        'type': 'event'
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'from',
            'type': 'address'
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'to',
            'type': 'address'
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256'
          }
        ],
        'name': 'Received',
        'type': 'event'
      },
      {
        'inputs': [],
        'name': 'country',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'currState',
        'outputs': [
          {
            'internalType': 'enum MSFCoin.State',
            'name': '',
            'type': 'uint8'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'description',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'funding_target',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'header',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'image',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'owner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'projectName',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'project_address',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'text',
        'outputs': [
          {
            'internalType': 'string',
            'name': '',
            'type': 'string'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      },
      {
        'inputs': [],
        'name': 'deposit',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
        'payable': true
      },
      {
        'inputs': [],
        'name': 'getContractBalance',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256'
          }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
      }
    ];

    const myContract = new web3.eth.Contract(myAbi, contractAddress);

    this.getData(myContract);
  }

  async getData(myContract: any): Promise<void> {
    // await Promise.resolve();

    myContract.methods.getContractBalance().call().then(console.log);
    myContract.methods.projectName().call().then(console.log);
    myContract.methods.country().call().then(console.log);
    myContract.methods.description().call().then((description: string) => console.log(`Description from the block chain ${description}`));
    myContract.methods.header().call().then(console.log);
    myContract.methods.image().call().then(console.log);

    const haitiProject: Project = await Promise.all([
      myContract.methods.getContractBalance().call(),
      myContract.methods.projectName().call(),
      myContract.methods.country().call(),
      myContract.methods.description().call(),
      myContract.methods.header().call(),
      myContract.methods.image().call(),
    ]).then(arry => ({
      msfCoins: arry[0],
      projectName: arry[1],
      country: arry[2],
      description: arry[3],
      header: arry[4],
      image: arry[5],
    }));

    this.projects = [
      haitiProject,
      // {
      //   msfCoins: 40000,
      //   projectName: "Fuel in Haiti",
      //   country: "Haiti",
      //   description: "In Haiti wird das Benzin knapp - mit drastischen Folgen für die Gesundheitsversorgung. Auch die Sicherheitslage ist weiterhin sehr angespannt.",
      //   header: "Haiti: Ärzte ohne Grenzen besorgt über eingeschränkte Gesundheitsversorgung",
      //   image: "MSB106202.webp",
      // },
      {
        msfCoins: 4,
        projectName: "Sea Rescue",
        country: "Mediterranean Sea",
        description: "In fünf Rettungsaktionen binnen zwei Tagen haben Teams von Ärzte ohne Grenzen an Bord der Geo Barents 367 Menschen aus Seenot im Mittelmeer gerettet.",
        header: "172 Kinder und Minderjährige aus Seenot gerettet",
        image: "MSB107687.webp",
      },
      {
        msfCoins: 3,
        projectName: "Climate Protection",
        country: "Global",
        description: "Nicht zuletzt die verheerenden Folgen der Überschwemmungen im nordrhein-westfälischen Ahrtal zeigen, dass die Klimakrise auch längst in Deutschland angekommen ist.",
        header: "Klimaschutz ist Gesundheitsschutz",
        image: "MSB65222.webp",
      },
    ];
  }

  projects: Project[] = [];

  // projects: Project[] = [
  //   {
  //     msfCoins: 40000,
  //     projectName: "Fuel in Haiti",
  //     country: "Haiti",
  //     description: "In Haiti wird das Benzin knapp - mit drastischen Folgen für die Gesundheitsversorgung. Auch die Sicherheitslage ist weiterhin sehr angespannt.",
  //     header: "Haiti: Ärzte ohne Grenzen besorgt über eingeschränkte Gesundheitsversorgung",
  //     image: "MSB106202.webp",
  //   },
  //   {
  //     msfCoins: 4,
  //     projectName: "Sea Rescue",
  //     country: "Mediterranean Sea",
  //     description: "In fünf Rettungsaktionen binnen zwei Tagen haben Teams von Ärzte ohne Grenzen an Bord der Geo Barents 367 Menschen aus Seenot im Mittelmeer gerettet.",
  //     header: "172 Kinder und Minderjährige aus Seenot gerettet",
  //     image: "MSB107687.webp",
  //   },
  //   {
  //     msfCoins: 3,
  //     projectName: "Climate Protection",
  //     country: "Global",
  //     description: "Nicht zuletzt die verheerenden Folgen der Überschwemmungen im nordrhein-westfälischen Ahrtal zeigen, dass die Klimakrise auch längst in Deutschland angekommen ist.",
  //     header: "Klimaschutz ist Gesundheitsschutz",
  //     image: "MSB65222.webp",
  //   },
  // ];

}
