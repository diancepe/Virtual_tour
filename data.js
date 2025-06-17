var APP_DATA = {
  "scenes": [
    {
      "id": "0-building",
      "name": "Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8291466691431282,
          "pitch": 0.07946099208895063,
          "rotation": 0,
          "target": "3-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-containment",
      "name": "Containment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5460456444316737,
          "pitch": 0.2735655545165425,
          "rotation": 0,
          "target": "2-data-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-data-center",
      "name": "Data Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5985637720426116,
          "pitch": 0.0482059146472924,
          "rotation": 0,
          "target": "1-containment"
        },
        {
          "yaw": -0.03964733056317371,
          "pitch": 0.6114138988196505,
          "rotation": 0,
          "target": "3-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8319778121101553,
          "pitch": 0.08215881948913584,
          "title": "Containment",
          "text": "A <strong data-start=\"253\" data-end=\"275\">containment server</strong> is a dedicated server used to isolate potentially harmful or suspicious activities from the rest of the network or system. Its main purpose is to contain threats such as malware, unauthorized access, or unstable applications, preventing them from spreading or causing damage. This type of server is commonly used in cybersecurity, testing environments, or incident response setups to safely analyze or manage risky processes"
        },
        {
          "yaw": 1.7682932984374755,
          "pitch": 0.2790877569385799,
          "title": "Data Center",
          "text": "A <strong data-start=\"43\" data-end=\"58\" data-is-only-node=\"\">data center</strong> is a facility that houses a large number of computer servers and related equipment used to store, manage, process, and distribute data. It typically includes networking hardware, storage systems, power supplies, cooling systems, and security infrastructure. Data centers are essential for running applications, hosting websites, managing cloud services, and supporting enterprise IT operations. They are designed to ensure high availability, reliability, and security of data and computing resources."
        }
      ]
    },
    {
      "id": "3-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8125352572872133,
          "pitch": 0.2082322810083781,
          "rotation": 0,
          "target": "4-meeting-rooom"
        },
        {
          "yaw": 1.3426017637059324,
          "pitch": 0.2017621489204906,
          "rotation": 0,
          "target": "5-monitoring-room"
        },
        {
          "yaw": -3.0692541452964868,
          "pitch": 0.38116327906756453,
          "rotation": 0,
          "target": "0-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-meeting-rooom",
      "name": "Meeting Rooom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47810149363119514,
          "pitch": 0.19811210008667146,
          "rotation": 0,
          "target": "5-monitoring-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-monitoring-room",
      "name": "Monitoring Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5068025931641706,
          "pitch": 0.2201573368100025,
          "rotation": 0,
          "target": "2-data-center"
        },
        {
          "yaw": -1.588023347523503,
          "pitch": 0.42453111877190963,
          "rotation": 0,
          "target": "2-data-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5496791552209777,
          "pitch": 0.025135942488612173,
          "title": "Monitoring Room",
          "text": "TextA <strong data-start=\"47\" data-end=\"66\" data-is-only-node=\"\">monitoring room</strong> is a dedicated space equipped with screens, computers, and monitoring systems used to observe, track, and manage activities or operations in real-time. It is commonly used in security, control centers, data centers, traffic management, and other fields where continuous supervision is required. The purpose of a monitoring room is to ensure safety, efficiency, and quick response to any issues or irregularities."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
