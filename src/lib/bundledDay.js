// Real flight-days recorded from the OpenSky Network and saved into the app,
// so the hosted demo shows genuine ADS-B data. OpenSky blocks cloud-server
// IPs, so live lookups of arbitrary aircraft only run locally (see README);
// these snapshots are what the deployed site plays. Generated from cached
// OpenSky data; not hand-edited.
//
// Order matters: the first day is the default shown on load.

export const BUNDLED_DAYS = [
  {
    "label": "Transatlantic",
    "icao24": "abca08",
    "callsign": "DAL1",
    "registration": "N859NW",
    "aircraftType": "A330 223",
    "date": "2026-07-01",
    "source": "bundled",
    "note": "A real flight-day recorded from the OpenSky Network, saved into the app. Live lookups of other aircraft only work when the app is run locally — see the README.",
    "flights": [
      {
        "callsign": "DAL1",
        "from": "KJFK",
        "to": "EGLL",
        "dep": 1782866195,
        "arr": 1782889379
      },
      {
        "callsign": "DAL51",
        "from": "EGLL",
        "to": "KSLC",
        "dep": 1782900404,
        "arr": 1782934159
      }
    ],
    "waypoints": [
      {
        "t": 1782866195,
        "lat": 40.6444,
        "lon": -73.8079,
        "alt": -304,
        "hdg": 120,
        "onGround": false
      },
      {
        "t": 1782866215,
        "lat": 40.6374,
        "lon": -73.7923,
        "alt": 0,
        "hdg": 119,
        "onGround": false
      },
      {
        "t": 1782866223,
        "lat": 40.6346,
        "lon": -73.7856,
        "alt": 0,
        "hdg": 118,
        "onGround": false
      },
      {
        "t": 1782866229,
        "lat": 40.6323,
        "lon": -73.7802,
        "alt": 0,
        "hdg": 120,
        "onGround": false
      },
      {
        "t": 1782866231,
        "lat": 40.6314,
        "lon": -73.7784,
        "alt": 0,
        "hdg": 123,
        "onGround": false
      },
      {
        "t": 1782866232,
        "lat": 40.6309,
        "lon": -73.7774,
        "alt": 0,
        "hdg": 125,
        "onGround": false
      },
      {
        "t": 1782866233,
        "lat": 40.6303,
        "lon": -73.7764,
        "alt": 0,
        "hdg": 126,
        "onGround": false
      },
      {
        "t": 1782866234,
        "lat": 40.6299,
        "lon": -73.7756,
        "alt": 0,
        "hdg": 128,
        "onGround": false
      },
      {
        "t": 1782866244,
        "lat": 40.6248,
        "lon": -73.7678,
        "alt": 304,
        "hdg": 130,
        "onGround": false
      },
      {
        "t": 1782866305,
        "lat": 40.5841,
        "lon": -73.7087,
        "alt": 609,
        "hdg": 132,
        "onGround": false
      },
      {
        "t": 1782866338,
        "lat": 40.5561,
        "lon": -73.67,
        "alt": 914,
        "hdg": 134,
        "onGround": false
      },
      {
        "t": 1782866364,
        "lat": 40.5329,
        "lon": -73.6389,
        "alt": 1219,
        "hdg": 134,
        "onGround": false
      },
      {
        "t": 1782866369,
        "lat": 40.5288,
        "lon": -73.6334,
        "alt": 1219,
        "hdg": 134,
        "onGround": false
      },
      {
        "t": 1782866372,
        "lat": 40.5257,
        "lon": -73.6291,
        "alt": 1219,
        "hdg": 131,
        "onGround": false
      },
      {
        "t": 1782866374,
        "lat": 40.5245,
        "lon": -73.6271,
        "alt": 1219,
        "hdg": 129,
        "onGround": false
      },
      {
        "t": 1782866376,
        "lat": 40.5226,
        "lon": -73.6239,
        "alt": 1219,
        "hdg": 127,
        "onGround": false
      },
      {
        "t": 1782866377,
        "lat": 40.5218,
        "lon": -73.6224,
        "alt": 1219,
        "hdg": 125,
        "onGround": false
      },
      {
        "t": 1782866378,
        "lat": 40.5211,
        "lon": -73.621,
        "alt": 1219,
        "hdg": 124,
        "onGround": false
      },
      {
        "t": 1782866379,
        "lat": 40.5204,
        "lon": -73.6196,
        "alt": 1219,
        "hdg": 122,
        "onGround": false
      },
      {
        "t": 1782866380,
        "lat": 40.5196,
        "lon": -73.618,
        "alt": 1219,
        "hdg": 121,
        "onGround": false
      },
      {
        "t": 1782866381,
        "lat": 40.5189,
        "lon": -73.6164,
        "alt": 1219,
        "hdg": 119,
        "onGround": false
      },
      {
        "t": 1782866382,
        "lat": 40.5186,
        "lon": -73.6155,
        "alt": 1219,
        "hdg": 117,
        "onGround": false
      },
      {
        "t": 1782866383,
        "lat": 40.518,
        "lon": -73.614,
        "alt": 1219,
        "hdg": 116,
        "onGround": false
      },
      {
        "t": 1782866384,
        "lat": 40.5172,
        "lon": -73.6116,
        "alt": 1219,
        "hdg": 114,
        "onGround": false
      },
      {
        "t": 1782866386,
        "lat": 40.5165,
        "lon": -73.6092,
        "alt": 1219,
        "hdg": 113,
        "onGround": false
      },
      {
        "t": 1782866388,
        "lat": 40.5155,
        "lon": -73.6053,
        "alt": 1219,
        "hdg": 107,
        "onGround": false
      },
      {
        "t": 1782866389,
        "lat": 40.5151,
        "lon": -73.6036,
        "alt": 1219,
        "hdg": 106,
        "onGround": false
      },
      {
        "t": 1782866390,
        "lat": 40.5147,
        "lon": -73.6018,
        "alt": 1219,
        "hdg": 104,
        "onGround": false
      },
      {
        "t": 1782866391,
        "lat": 40.5145,
        "lon": -73.6001,
        "alt": 1219,
        "hdg": 102,
        "onGround": false
      },
      {
        "t": 1782866392,
        "lat": 40.5142,
        "lon": -73.5983,
        "alt": 1524,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1782866393,
        "lat": 40.5139,
        "lon": -73.5964,
        "alt": 1524,
        "hdg": 99,
        "onGround": false
      },
      {
        "t": 1782866394,
        "lat": 40.5139,
        "lon": -73.5954,
        "alt": 1524,
        "hdg": 98,
        "onGround": false
      },
      {
        "t": 1782866395,
        "lat": 40.5137,
        "lon": -73.5938,
        "alt": 1524,
        "hdg": 96,
        "onGround": false
      },
      {
        "t": 1782866396,
        "lat": 40.5135,
        "lon": -73.5911,
        "alt": 1524,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1782866397,
        "lat": 40.5135,
        "lon": -73.5902,
        "alt": 1524,
        "hdg": 93,
        "onGround": false
      },
      {
        "t": 1782866398,
        "lat": 40.5134,
        "lon": -73.5884,
        "alt": 1524,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782866399,
        "lat": 40.5134,
        "lon": -73.5859,
        "alt": 1524,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782866400,
        "lat": 40.5134,
        "lon": -73.5849,
        "alt": 1524,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1782866401,
        "lat": 40.5134,
        "lon": -73.583,
        "alt": 1524,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782866403,
        "lat": 40.5135,
        "lon": -73.5793,
        "alt": 1524,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1782866405,
        "lat": 40.5138,
        "lon": -73.576,
        "alt": 1524,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1782866408,
        "lat": 40.5144,
        "lon": -73.5703,
        "alt": 1524,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782866416,
        "lat": 40.5161,
        "lon": -73.5571,
        "alt": 1828,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782866445,
        "lat": 40.5232,
        "lon": -73.507,
        "alt": 1828,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782866458,
        "lat": 40.5264,
        "lon": -73.4839,
        "alt": 1828,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782866460,
        "lat": 40.5267,
        "lon": -73.4806,
        "alt": 1828,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1782866462,
        "lat": 40.5269,
        "lon": -73.477,
        "alt": 1828,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782866463,
        "lat": 40.527,
        "lon": -73.4752,
        "alt": 1828,
        "hdg": 87,
        "onGround": false
      },
      {
        "t": 1782866464,
        "lat": 40.527,
        "lon": -73.4733,
        "alt": 1828,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782866465,
        "lat": 40.527,
        "lon": -73.4713,
        "alt": 1828,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782866466,
        "lat": 40.527,
        "lon": -73.4694,
        "alt": 1828,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782866467,
        "lat": 40.5269,
        "lon": -73.4674,
        "alt": 1828,
        "hdg": 93,
        "onGround": false
      },
      {
        "t": 1782866468,
        "lat": 40.5267,
        "lon": -73.4655,
        "alt": 1828,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1782866469,
        "lat": 40.5266,
        "lon": -73.4645,
        "alt": 1828,
        "hdg": 96,
        "onGround": false
      },
      {
        "t": 1782866470,
        "lat": 40.5264,
        "lon": -73.462,
        "alt": 1828,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782866471,
        "lat": 40.5261,
        "lon": -73.4601,
        "alt": 2438,
        "hdg": 99,
        "onGround": false
      },
      {
        "t": 1782866473,
        "lat": 40.5257,
        "lon": -73.4573,
        "alt": 2438,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1782866475,
        "lat": 40.5251,
        "lon": -73.4537,
        "alt": 2438,
        "hdg": 103,
        "onGround": false
      },
      {
        "t": 1782866477,
        "lat": 40.5243,
        "lon": -73.4498,
        "alt": 2438,
        "hdg": 104,
        "onGround": false
      },
      {
        "t": 1782866480,
        "lat": 40.5231,
        "lon": -73.4445,
        "alt": 2438,
        "hdg": 107,
        "onGround": false
      },
      {
        "t": 1782866489,
        "lat": 40.5191,
        "lon": -73.4291,
        "alt": 2438,
        "hdg": 109,
        "onGround": false
      },
      {
        "t": 1782866500,
        "lat": 40.5137,
        "lon": -73.4103,
        "alt": 2743,
        "hdg": 111,
        "onGround": false
      },
      {
        "t": 1782866533,
        "lat": 40.4957,
        "lon": -73.3527,
        "alt": 3048,
        "hdg": 111,
        "onGround": false
      },
      {
        "t": 1782866536,
        "lat": 40.4943,
        "lon": -73.3475,
        "alt": 3048,
        "hdg": 109,
        "onGround": false
      },
      {
        "t": 1782866539,
        "lat": 40.4929,
        "lon": -73.3419,
        "alt": 3048,
        "hdg": 107,
        "onGround": false
      },
      {
        "t": 1782866541,
        "lat": 40.492,
        "lon": -73.3383,
        "alt": 3048,
        "hdg": 105,
        "onGround": false
      },
      {
        "t": 1782866543,
        "lat": 40.4914,
        "lon": -73.3351,
        "alt": 3048,
        "hdg": 104,
        "onGround": false
      },
      {
        "t": 1782866545,
        "lat": 40.4906,
        "lon": -73.3306,
        "alt": 3048,
        "hdg": 102,
        "onGround": false
      },
      {
        "t": 1782866547,
        "lat": 40.49,
        "lon": -73.3264,
        "alt": 3048,
        "hdg": 100,
        "onGround": false
      },
      {
        "t": 1782866549,
        "lat": 40.4896,
        "lon": -73.3231,
        "alt": 3048,
        "hdg": 98,
        "onGround": false
      },
      {
        "t": 1782866551,
        "lat": 40.4892,
        "lon": -73.3187,
        "alt": 3048,
        "hdg": 96,
        "onGround": false
      },
      {
        "t": 1782866553,
        "lat": 40.4889,
        "lon": -73.3144,
        "alt": 3048,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1782866555,
        "lat": 40.4888,
        "lon": -73.3114,
        "alt": 3048,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782866557,
        "lat": 40.4887,
        "lon": -73.3073,
        "alt": 3048,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782866559,
        "lat": 40.4888,
        "lon": -73.3029,
        "alt": 3048,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782866562,
        "lat": 40.4891,
        "lon": -73.2972,
        "alt": 3048,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782866565,
        "lat": 40.4895,
        "lon": -73.2912,
        "alt": 3048,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1782866568,
        "lat": 40.4901,
        "lon": -73.2851,
        "alt": 3048,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782866571,
        "lat": 40.491,
        "lon": -73.2782,
        "alt": 3048,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782866574,
        "lat": 40.4918,
        "lon": -73.273,
        "alt": 3048,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866578,
        "lat": 40.4933,
        "lon": -73.2647,
        "alt": 3048,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782866595,
        "lat": 40.5011,
        "lon": -73.2298,
        "alt": 3352,
        "hdg": 73,
        "onGround": false
      },
      {
        "t": 1782866607,
        "lat": 40.5065,
        "lon": -73.2059,
        "alt": 3352,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1782866640,
        "lat": 40.5205,
        "lon": -73.1334,
        "alt": 3657,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782866674,
        "lat": 40.5341,
        "lon": -73.0568,
        "alt": 3962,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782866707,
        "lat": 40.5474,
        "lon": -72.9817,
        "alt": 3962,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866742,
        "lat": 40.5615,
        "lon": -72.9012,
        "alt": 4572,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866760,
        "lat": 40.5686,
        "lon": -72.8607,
        "alt": 4876,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866780,
        "lat": 40.5762,
        "lon": -72.8167,
        "alt": 5181,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866831,
        "lat": 40.5961,
        "lon": -72.7038,
        "alt": 5486,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866910,
        "lat": 40.6288,
        "lon": -72.5149,
        "alt": 5791,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782866955,
        "lat": 40.6475,
        "lon": -72.4055,
        "alt": 6096,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867013,
        "lat": 40.6723,
        "lon": -72.2601,
        "alt": 6400,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867075,
        "lat": 40.6989,
        "lon": -72.1025,
        "alt": 6705,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867138,
        "lat": 40.7265,
        "lon": -71.9379,
        "alt": 7010,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867197,
        "lat": 40.7522,
        "lon": -71.783,
        "alt": 7315,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867264,
        "lat": 40.7816,
        "lon": -71.604,
        "alt": 7620,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867338,
        "lat": 40.8142,
        "lon": -71.4038,
        "alt": 7924,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782867435,
        "lat": 40.8574,
        "lon": -71.1345,
        "alt": 8229,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867535,
        "lat": 40.9028,
        "lon": -70.8467,
        "alt": 8229,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867604,
        "lat": 40.9349,
        "lon": -70.6406,
        "alt": 8839,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867657,
        "lat": 40.959,
        "lon": -70.4832,
        "alt": 9144,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867721,
        "lat": 40.9878,
        "lon": -70.2941,
        "alt": 9448,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867795,
        "lat": 41.0211,
        "lon": -70.0724,
        "alt": 9753,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867849,
        "lat": 41.0449,
        "lon": -69.9127,
        "alt": 10058,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867889,
        "lat": 41.0621,
        "lon": -69.796,
        "alt": 10058,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782867900,
        "lat": 41.0676,
        "lon": -69.7651,
        "alt": 10058,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782867912,
        "lat": 41.0751,
        "lon": -69.73,
        "alt": 10363,
        "hdg": 73,
        "onGround": false
      },
      {
        "t": 1782867916,
        "lat": 41.0776,
        "lon": -69.7193,
        "alt": 10363,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1782867984,
        "lat": 41.1284,
        "lon": -69.5309,
        "alt": 10668,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868042,
        "lat": 41.1712,
        "lon": -69.3732,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868127,
        "lat": 41.233,
        "lon": -69.1438,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868133,
        "lat": 41.2374,
        "lon": -69.1273,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868134,
        "lat": 41.2382,
        "lon": -69.1244,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868136,
        "lat": 41.2394,
        "lon": -69.12,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868139,
        "lat": 41.2416,
        "lon": -69.1118,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868176,
        "lat": 41.2686,
        "lon": -69.0109,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868177,
        "lat": 41.2694,
        "lon": -69.0078,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868194,
        "lat": 41.2815,
        "lon": -68.9624,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868195,
        "lat": 41.2822,
        "lon": -68.9596,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868196,
        "lat": 41.2829,
        "lon": -68.9569,
        "alt": 10972,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868198,
        "lat": 41.2844,
        "lon": -68.9512,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868308,
        "lat": 41.3639,
        "lon": -68.651,
        "alt": 11582,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868442,
        "lat": 41.4593,
        "lon": -68.2852,
        "alt": 11277,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868443,
        "lat": 41.4601,
        "lon": -68.2823,
        "alt": 11582,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782868626,
        "lat": 41.5877,
        "lon": -67.7844,
        "alt": 11277,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1782868628,
        "lat": 41.5892,
        "lon": -67.7788,
        "alt": 11582,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1782868641,
        "lat": 41.5985,
        "lon": -67.742,
        "alt": 11277,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1782868642,
        "lat": 41.5991,
        "lon": -67.7396,
        "alt": 11582,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1782868910,
        "lat": 41.7809,
        "lon": -67.0106,
        "alt": 11582,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782869527,
        "lat": 42.2642,
        "lon": -65.3892,
        "alt": 11582,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1782871002,
        "lat": 43.3039,
        "lon": -61.5047,
        "alt": 11582,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1782872049,
        "lat": 44.0063,
        "lon": -58.4562,
        "alt": 11582,
        "hdg": 73,
        "onGround": false
      },
      {
        "t": 1782872822,
        "lat": 44.4832,
        "lon": -56.1007,
        "alt": 11582,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782872829,
        "lat": 44.4868,
        "lon": -56.0795,
        "alt": 11582,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782884766,
        "lat": 50.9933,
        "lon": -13.2301,
        "alt": 11582,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782885110,
        "lat": 50.9711,
        "lon": -11.9236,
        "alt": 11582,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782885932,
        "lat": 50.8593,
        "lon": -8.8079,
        "alt": 11582,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1782886805,
        "lat": 50.6489,
        "lon": -5.5024,
        "alt": 11277,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782886806,
        "lat": 50.6486,
        "lon": -5.4982,
        "alt": 11582,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782886976,
        "lat": 50.5971,
        "lon": -4.8617,
        "alt": 11277,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782887039,
        "lat": 50.5769,
        "lon": -4.6244,
        "alt": 10972,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782887100,
        "lat": 50.557,
        "lon": -4.3948,
        "alt": 10668,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782887162,
        "lat": 50.5361,
        "lon": -4.1595,
        "alt": 10363,
        "hdg": 98,
        "onGround": false
      },
      {
        "t": 1782887163,
        "lat": 50.5357,
        "lon": -4.1553,
        "alt": 10363,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782887176,
        "lat": 50.5322,
        "lon": -4.1056,
        "alt": 10363,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1782887189,
        "lat": 50.5301,
        "lon": -4.0557,
        "alt": 10363,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782887204,
        "lat": 50.5291,
        "lon": -3.9985,
        "alt": 10363,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782887216,
        "lat": 50.5296,
        "lon": -3.9521,
        "alt": 10363,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782887230,
        "lat": 50.5315,
        "lon": -3.8986,
        "alt": 10363,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782887245,
        "lat": 50.5351,
        "lon": -3.8419,
        "alt": 10058,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1782887254,
        "lat": 50.5379,
        "lon": -3.8086,
        "alt": 10058,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782887275,
        "lat": 50.5466,
        "lon": -3.7314,
        "alt": 9753,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782887325,
        "lat": 50.5681,
        "lon": -3.5452,
        "alt": 9448,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782887379,
        "lat": 50.5911,
        "lon": -3.3438,
        "alt": 9144,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782887437,
        "lat": 50.6152,
        "lon": -3.1288,
        "alt": 8839,
        "hdg": 80,
        "onGround": false
      },
      {
        "t": 1782887491,
        "lat": 50.6371,
        "lon": -2.9318,
        "alt": 8229,
        "hdg": 80,
        "onGround": false
      },
      {
        "t": 1782887549,
        "lat": 50.6593,
        "lon": -2.7276,
        "alt": 8229,
        "hdg": 80,
        "onGround": false
      },
      {
        "t": 1782887590,
        "lat": 50.6743,
        "lon": -2.5829,
        "alt": 8229,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782887600,
        "lat": 50.6768,
        "lon": -2.5462,
        "alt": 8229,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782887610,
        "lat": 50.6782,
        "lon": -2.5116,
        "alt": 7924,
        "hdg": 87,
        "onGround": false
      },
      {
        "t": 1782887618,
        "lat": 50.6787,
        "lon": -2.4811,
        "alt": 7924,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1782887629,
        "lat": 50.6785,
        "lon": -2.4418,
        "alt": 7924,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782887654,
        "lat": 50.675,
        "lon": -2.3505,
        "alt": 7620,
        "hdg": 93,
        "onGround": false
      },
      {
        "t": 1782887700,
        "lat": 50.6681,
        "lon": -2.1897,
        "alt": 7315,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1782887745,
        "lat": 50.6615,
        "lon": -2.0304,
        "alt": 7010,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782887751,
        "lat": 50.6613,
        "lon": -2.0098,
        "alt": 7010,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782887774,
        "lat": 50.6622,
        "lon": -1.9313,
        "alt": 7010,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782887779,
        "lat": 50.6627,
        "lon": -1.9175,
        "alt": 7010,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782887785,
        "lat": 50.6639,
        "lon": -1.8982,
        "alt": 7010,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782887787,
        "lat": 50.6647,
        "lon": -1.8898,
        "alt": 7010,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782887791,
        "lat": 50.6663,
        "lon": -1.8764,
        "alt": 7010,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782887797,
        "lat": 50.669,
        "lon": -1.8577,
        "alt": 6705,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782887868,
        "lat": 50.7027,
        "lon": -1.6355,
        "alt": 6400,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782887891,
        "lat": 50.7137,
        "lon": -1.5638,
        "alt": 6096,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782887918,
        "lat": 50.7263,
        "lon": -1.4796,
        "alt": 5791,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782887956,
        "lat": 50.7435,
        "lon": -1.3641,
        "alt": 5486,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782887981,
        "lat": 50.7546,
        "lon": -1.2901,
        "alt": 5486,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782887984,
        "lat": 50.7561,
        "lon": -1.2822,
        "alt": 5486,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1782887986,
        "lat": 50.7574,
        "lon": -1.2762,
        "alt": 5486,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782887988,
        "lat": 50.7588,
        "lon": -1.2707,
        "alt": 5486,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1782887990,
        "lat": 50.7603,
        "lon": -1.2651,
        "alt": 5486,
        "hdg": 66,
        "onGround": false
      },
      {
        "t": 1782887991,
        "lat": 50.7607,
        "lon": -1.2637,
        "alt": 5486,
        "hdg": 65,
        "onGround": false
      },
      {
        "t": 1782887993,
        "lat": 50.7625,
        "lon": -1.2582,
        "alt": 5486,
        "hdg": 62,
        "onGround": false
      },
      {
        "t": 1782887994,
        "lat": 50.7634,
        "lon": -1.2556,
        "alt": 5181,
        "hdg": 61,
        "onGround": false
      },
      {
        "t": 1782887996,
        "lat": 50.7652,
        "lon": -1.2508,
        "alt": 5181,
        "hdg": 59,
        "onGround": false
      },
      {
        "t": 1782887998,
        "lat": 50.7671,
        "lon": -1.246,
        "alt": 5181,
        "hdg": 56,
        "onGround": false
      },
      {
        "t": 1782888000,
        "lat": 50.7692,
        "lon": -1.2411,
        "alt": 5181,
        "hdg": 54,
        "onGround": false
      },
      {
        "t": 1782888002,
        "lat": 50.7718,
        "lon": -1.2358,
        "alt": 5181,
        "hdg": 53,
        "onGround": false
      },
      {
        "t": 1782888005,
        "lat": 50.7741,
        "lon": -1.2311,
        "alt": 5181,
        "hdg": 51,
        "onGround": false
      },
      {
        "t": 1782888010,
        "lat": 50.7809,
        "lon": -1.2193,
        "alt": 5181,
        "hdg": 49,
        "onGround": false
      },
      {
        "t": 1782888011,
        "lat": 50.7828,
        "lon": -1.2162,
        "alt": 4876,
        "hdg": 46,
        "onGround": false
      },
      {
        "t": 1782888013,
        "lat": 50.7848,
        "lon": -1.2131,
        "alt": 4876,
        "hdg": 44,
        "onGround": false
      },
      {
        "t": 1782888031,
        "lat": 50.8094,
        "lon": -1.177,
        "alt": 4572,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888092,
        "lat": 50.889,
        "lon": -1.0614,
        "alt": 3962,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888126,
        "lat": 50.9329,
        "lon": -0.9974,
        "alt": 3962,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888161,
        "lat": 50.9775,
        "lon": -0.9321,
        "alt": 3657,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888204,
        "lat": 51.0318,
        "lon": -0.8524,
        "alt": 3352,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888249,
        "lat": 51.0865,
        "lon": -0.7719,
        "alt": 3048,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888365,
        "lat": 51.2119,
        "lon": -0.5861,
        "alt": 2743,
        "hdg": 43,
        "onGround": false
      },
      {
        "t": 1782888377,
        "lat": 51.2233,
        "lon": -0.5691,
        "alt": 3048,
        "hdg": 43,
        "onGround": false
      },
      {
        "t": 1782888403,
        "lat": 51.2472,
        "lon": -0.5335,
        "alt": 2743,
        "hdg": 43,
        "onGround": false
      },
      {
        "t": 1782888494,
        "lat": 51.3264,
        "lon": -0.4152,
        "alt": 2743,
        "hdg": 45,
        "onGround": false
      },
      {
        "t": 1782888496,
        "lat": 51.3281,
        "lon": -0.4123,
        "alt": 2743,
        "hdg": 47,
        "onGround": false
      },
      {
        "t": 1782888497,
        "lat": 51.3287,
        "lon": -0.4111,
        "alt": 2743,
        "hdg": 48,
        "onGround": false
      },
      {
        "t": 1782888498,
        "lat": 51.3297,
        "lon": -0.4092,
        "alt": 2743,
        "hdg": 49,
        "onGround": false
      },
      {
        "t": 1782888499,
        "lat": 51.3304,
        "lon": -0.4079,
        "alt": 2743,
        "hdg": 51,
        "onGround": false
      },
      {
        "t": 1782888500,
        "lat": 51.331,
        "lon": -0.4066,
        "alt": 2743,
        "hdg": 52,
        "onGround": false
      },
      {
        "t": 1782888501,
        "lat": 51.3317,
        "lon": -0.405,
        "alt": 2743,
        "hdg": 54,
        "onGround": false
      },
      {
        "t": 1782888502,
        "lat": 51.3324,
        "lon": -0.4032,
        "alt": 2743,
        "hdg": 56,
        "onGround": false
      },
      {
        "t": 1782888503,
        "lat": 51.333,
        "lon": -0.4017,
        "alt": 2743,
        "hdg": 57,
        "onGround": false
      },
      {
        "t": 1782888504,
        "lat": 51.3336,
        "lon": -0.4,
        "alt": 2743,
        "hdg": 59,
        "onGround": false
      },
      {
        "t": 1782888505,
        "lat": 51.3342,
        "lon": -0.3982,
        "alt": 2743,
        "hdg": 61,
        "onGround": false
      },
      {
        "t": 1782888507,
        "lat": 51.3348,
        "lon": -0.3963,
        "alt": 2743,
        "hdg": 63,
        "onGround": false
      },
      {
        "t": 1782888508,
        "lat": 51.3355,
        "lon": -0.3934,
        "alt": 2743,
        "hdg": 66,
        "onGround": false
      },
      {
        "t": 1782888510,
        "lat": 51.3361,
        "lon": -0.391,
        "alt": 2743,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1782888511,
        "lat": 51.3369,
        "lon": -0.3873,
        "alt": 2743,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1782888512,
        "lat": 51.3372,
        "lon": -0.3854,
        "alt": 2743,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1782888513,
        "lat": 51.3375,
        "lon": -0.3834,
        "alt": 2743,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782888515,
        "lat": 51.3378,
        "lon": -0.3799,
        "alt": 2743,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782888516,
        "lat": 51.338,
        "lon": -0.3778,
        "alt": 2743,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782888517,
        "lat": 51.3381,
        "lon": -0.3758,
        "alt": 2743,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1782888518,
        "lat": 51.3382,
        "lon": -0.374,
        "alt": 2743,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1782888519,
        "lat": 51.3382,
        "lon": -0.3719,
        "alt": 2743,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782888520,
        "lat": 51.3382,
        "lon": -0.3699,
        "alt": 2743,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782888521,
        "lat": 51.3381,
        "lon": -0.3678,
        "alt": 2743,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782888522,
        "lat": 51.338,
        "lon": -0.3658,
        "alt": 2743,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1782888523,
        "lat": 51.3379,
        "lon": -0.3639,
        "alt": 2743,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1782888525,
        "lat": 51.3377,
        "lon": -0.3618,
        "alt": 2743,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782888526,
        "lat": 51.3372,
        "lon": -0.3579,
        "alt": 2743,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1782888527,
        "lat": 51.3369,
        "lon": -0.356,
        "alt": 2743,
        "hdg": 103,
        "onGround": false
      },
      {
        "t": 1782888528,
        "lat": 51.3365,
        "lon": -0.3541,
        "alt": 2743,
        "hdg": 105,
        "onGround": false
      },
      {
        "t": 1782888529,
        "lat": 51.3362,
        "lon": -0.3522,
        "alt": 2743,
        "hdg": 107,
        "onGround": false
      },
      {
        "t": 1782888530,
        "lat": 51.3358,
        "lon": -0.3504,
        "alt": 2743,
        "hdg": 108,
        "onGround": false
      },
      {
        "t": 1782888531,
        "lat": 51.3353,
        "lon": -0.3484,
        "alt": 2743,
        "hdg": 110,
        "onGround": false
      },
      {
        "t": 1782888532,
        "lat": 51.3347,
        "lon": -0.3464,
        "alt": 2743,
        "hdg": 112,
        "onGround": false
      },
      {
        "t": 1782888533,
        "lat": 51.3342,
        "lon": -0.3444,
        "alt": 2743,
        "hdg": 114,
        "onGround": false
      },
      {
        "t": 1782888534,
        "lat": 51.3337,
        "lon": -0.3429,
        "alt": 2743,
        "hdg": 116,
        "onGround": false
      },
      {
        "t": 1782888535,
        "lat": 51.333,
        "lon": -0.341,
        "alt": 2743,
        "hdg": 118,
        "onGround": false
      },
      {
        "t": 1782888536,
        "lat": 51.3324,
        "lon": -0.3393,
        "alt": 2743,
        "hdg": 120,
        "onGround": false
      },
      {
        "t": 1782888537,
        "lat": 51.3317,
        "lon": -0.3377,
        "alt": 2743,
        "hdg": 122,
        "onGround": false
      },
      {
        "t": 1782888538,
        "lat": 51.331,
        "lon": -0.336,
        "alt": 2743,
        "hdg": 123,
        "onGround": false
      },
      {
        "t": 1782888539,
        "lat": 51.3302,
        "lon": -0.3343,
        "alt": 2743,
        "hdg": 125,
        "onGround": false
      },
      {
        "t": 1782888540,
        "lat": 51.3294,
        "lon": -0.3327,
        "alt": 2743,
        "hdg": 127,
        "onGround": false
      },
      {
        "t": 1782888541,
        "lat": 51.3291,
        "lon": -0.3321,
        "alt": 2743,
        "hdg": 129,
        "onGround": false
      },
      {
        "t": 1782888542,
        "lat": 51.3277,
        "lon": -0.3294,
        "alt": 2743,
        "hdg": 131,
        "onGround": false
      },
      {
        "t": 1782888543,
        "lat": 51.3271,
        "lon": -0.3286,
        "alt": 2743,
        "hdg": 133,
        "onGround": false
      },
      {
        "t": 1782888544,
        "lat": 51.3262,
        "lon": -0.3271,
        "alt": 2743,
        "hdg": 135,
        "onGround": false
      },
      {
        "t": 1782888545,
        "lat": 51.3251,
        "lon": -0.3255,
        "alt": 2743,
        "hdg": 136,
        "onGround": false
      },
      {
        "t": 1782888546,
        "lat": 51.3241,
        "lon": -0.3241,
        "alt": 2743,
        "hdg": 138,
        "onGround": false
      },
      {
        "t": 1782888547,
        "lat": 51.3232,
        "lon": -0.323,
        "alt": 2743,
        "hdg": 140,
        "onGround": false
      },
      {
        "t": 1782888548,
        "lat": 51.3221,
        "lon": -0.3216,
        "alt": 2438,
        "hdg": 142,
        "onGround": false
      },
      {
        "t": 1782888549,
        "lat": 51.3211,
        "lon": -0.3204,
        "alt": 2438,
        "hdg": 144,
        "onGround": false
      },
      {
        "t": 1782888550,
        "lat": 51.3199,
        "lon": -0.3192,
        "alt": 2438,
        "hdg": 145,
        "onGround": false
      },
      {
        "t": 1782888551,
        "lat": 51.3187,
        "lon": -0.318,
        "alt": 2438,
        "hdg": 147,
        "onGround": false
      },
      {
        "t": 1782888552,
        "lat": 51.3176,
        "lon": -0.317,
        "alt": 2438,
        "hdg": 149,
        "onGround": false
      },
      {
        "t": 1782888553,
        "lat": 51.317,
        "lon": -0.3165,
        "alt": 2438,
        "hdg": 151,
        "onGround": false
      },
      {
        "t": 1782888554,
        "lat": 51.3157,
        "lon": -0.3154,
        "alt": 2438,
        "hdg": 153,
        "onGround": false
      },
      {
        "t": 1782888555,
        "lat": 51.3146,
        "lon": -0.3146,
        "alt": 2438,
        "hdg": 155,
        "onGround": false
      },
      {
        "t": 1782888556,
        "lat": 51.3133,
        "lon": -0.3137,
        "alt": 2438,
        "hdg": 157,
        "onGround": false
      },
      {
        "t": 1782888557,
        "lat": 51.3121,
        "lon": -0.313,
        "alt": 2438,
        "hdg": 159,
        "onGround": false
      },
      {
        "t": 1782888558,
        "lat": 51.3108,
        "lon": -0.3124,
        "alt": 2438,
        "hdg": 161,
        "onGround": false
      },
      {
        "t": 1782888559,
        "lat": 51.3095,
        "lon": -0.3118,
        "alt": 2438,
        "hdg": 163,
        "onGround": false
      },
      {
        "t": 1782888560,
        "lat": 51.3082,
        "lon": -0.3113,
        "alt": 2438,
        "hdg": 166,
        "onGround": false
      },
      {
        "t": 1782888561,
        "lat": 51.307,
        "lon": -0.3109,
        "alt": 2438,
        "hdg": 168,
        "onGround": false
      },
      {
        "t": 1782888562,
        "lat": 51.3058,
        "lon": -0.3106,
        "alt": 2438,
        "hdg": 170,
        "onGround": false
      },
      {
        "t": 1782888563,
        "lat": 51.3045,
        "lon": -0.3103,
        "alt": 2438,
        "hdg": 172,
        "onGround": false
      },
      {
        "t": 1782888564,
        "lat": 51.3032,
        "lon": -0.3101,
        "alt": 2438,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782888565,
        "lat": 51.3026,
        "lon": -0.3101,
        "alt": 2438,
        "hdg": 176,
        "onGround": false
      },
      {
        "t": 1782888566,
        "lat": 51.3008,
        "lon": -0.31,
        "alt": 2438,
        "hdg": 178,
        "onGround": false
      },
      {
        "t": 1782888567,
        "lat": 51.2997,
        "lon": -0.3101,
        "alt": 2438,
        "hdg": 180,
        "onGround": false
      },
      {
        "t": 1782888568,
        "lat": 51.2984,
        "lon": -0.3101,
        "alt": 2438,
        "hdg": 182,
        "onGround": false
      },
      {
        "t": 1782888569,
        "lat": 51.2973,
        "lon": -0.3103,
        "alt": 2438,
        "hdg": 184,
        "onGround": false
      },
      {
        "t": 1782888570,
        "lat": 51.2956,
        "lon": -0.3106,
        "alt": 2438,
        "hdg": 186,
        "onGround": false
      },
      {
        "t": 1782888571,
        "lat": 51.2949,
        "lon": -0.3107,
        "alt": 2438,
        "hdg": 188,
        "onGround": false
      },
      {
        "t": 1782888572,
        "lat": 51.2931,
        "lon": -0.3113,
        "alt": 2438,
        "hdg": 190,
        "onGround": false
      },
      {
        "t": 1782888573,
        "lat": 51.292,
        "lon": -0.3117,
        "alt": 2438,
        "hdg": 192,
        "onGround": false
      },
      {
        "t": 1782888574,
        "lat": 51.2913,
        "lon": -0.312,
        "alt": 2438,
        "hdg": 193,
        "onGround": false
      },
      {
        "t": 1782888575,
        "lat": 51.29,
        "lon": -0.3125,
        "alt": 2438,
        "hdg": 195,
        "onGround": false
      },
      {
        "t": 1782888576,
        "lat": 51.2888,
        "lon": -0.3132,
        "alt": 2438,
        "hdg": 197,
        "onGround": false
      },
      {
        "t": 1782888577,
        "lat": 51.2877,
        "lon": -0.3138,
        "alt": 2438,
        "hdg": 199,
        "onGround": false
      },
      {
        "t": 1782888578,
        "lat": 51.2866,
        "lon": -0.3145,
        "alt": 2438,
        "hdg": 201,
        "onGround": false
      },
      {
        "t": 1782888579,
        "lat": 51.285,
        "lon": -0.3156,
        "alt": 2438,
        "hdg": 203,
        "onGround": false
      },
      {
        "t": 1782888580,
        "lat": 51.284,
        "lon": -0.3164,
        "alt": 2438,
        "hdg": 204,
        "onGround": false
      },
      {
        "t": 1782888581,
        "lat": 51.283,
        "lon": -0.3172,
        "alt": 2438,
        "hdg": 206,
        "onGround": false
      },
      {
        "t": 1782888582,
        "lat": 51.2819,
        "lon": -0.3182,
        "alt": 2438,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782888583,
        "lat": 51.281,
        "lon": -0.319,
        "alt": 2438,
        "hdg": 210,
        "onGround": false
      },
      {
        "t": 1782888584,
        "lat": 51.2799,
        "lon": -0.3202,
        "alt": 2438,
        "hdg": 212,
        "onGround": false
      },
      {
        "t": 1782888585,
        "lat": 51.2789,
        "lon": -0.3212,
        "alt": 2438,
        "hdg": 213,
        "onGround": false
      },
      {
        "t": 1782888586,
        "lat": 51.2784,
        "lon": -0.3219,
        "alt": 2438,
        "hdg": 215,
        "onGround": false
      },
      {
        "t": 1782888587,
        "lat": 51.2774,
        "lon": -0.3231,
        "alt": 2438,
        "hdg": 217,
        "onGround": false
      },
      {
        "t": 1782888588,
        "lat": 51.2764,
        "lon": -0.3243,
        "alt": 2438,
        "hdg": 219,
        "onGround": false
      },
      {
        "t": 1782888589,
        "lat": 51.2755,
        "lon": -0.3256,
        "alt": 2438,
        "hdg": 220,
        "onGround": false
      },
      {
        "t": 1782888590,
        "lat": 51.2743,
        "lon": -0.3273,
        "alt": 2438,
        "hdg": 222,
        "onGround": false
      },
      {
        "t": 1782888591,
        "lat": 51.2739,
        "lon": -0.3281,
        "alt": 2438,
        "hdg": 224,
        "onGround": false
      },
      {
        "t": 1782888592,
        "lat": 51.2727,
        "lon": -0.33,
        "alt": 2438,
        "hdg": 225,
        "onGround": false
      },
      {
        "t": 1782888593,
        "lat": 51.2721,
        "lon": -0.3311,
        "alt": 2438,
        "hdg": 227,
        "onGround": false
      },
      {
        "t": 1782888594,
        "lat": 51.2717,
        "lon": -0.3319,
        "alt": 2438,
        "hdg": 229,
        "onGround": false
      },
      {
        "t": 1782888595,
        "lat": 51.2706,
        "lon": -0.334,
        "alt": 2438,
        "hdg": 231,
        "onGround": false
      },
      {
        "t": 1782888596,
        "lat": 51.2699,
        "lon": -0.3355,
        "alt": 2438,
        "hdg": 232,
        "onGround": false
      },
      {
        "t": 1782888597,
        "lat": 51.2692,
        "lon": -0.3371,
        "alt": 2438,
        "hdg": 234,
        "onGround": false
      },
      {
        "t": 1782888598,
        "lat": 51.2689,
        "lon": -0.3379,
        "alt": 2438,
        "hdg": 236,
        "onGround": false
      },
      {
        "t": 1782888599,
        "lat": 51.2682,
        "lon": -0.3396,
        "alt": 2438,
        "hdg": 237,
        "onGround": false
      },
      {
        "t": 1782888600,
        "lat": 51.2676,
        "lon": -0.3413,
        "alt": 2438,
        "hdg": 239,
        "onGround": false
      },
      {
        "t": 1782888601,
        "lat": 51.2669,
        "lon": -0.3433,
        "alt": 2438,
        "hdg": 241,
        "onGround": false
      },
      {
        "t": 1782888602,
        "lat": 51.2666,
        "lon": -0.3443,
        "alt": 2438,
        "hdg": 242,
        "onGround": false
      },
      {
        "t": 1782888603,
        "lat": 51.2661,
        "lon": -0.3461,
        "alt": 2438,
        "hdg": 244,
        "onGround": false
      },
      {
        "t": 1782888604,
        "lat": 51.2657,
        "lon": -0.3476,
        "alt": 2438,
        "hdg": 246,
        "onGround": false
      },
      {
        "t": 1782888605,
        "lat": 51.2654,
        "lon": -0.3485,
        "alt": 2438,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782888606,
        "lat": 51.2648,
        "lon": -0.3512,
        "alt": 2438,
        "hdg": 249,
        "onGround": false
      },
      {
        "t": 1782888607,
        "lat": 51.2644,
        "lon": -0.3528,
        "alt": 2438,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782888608,
        "lat": 51.2641,
        "lon": -0.3547,
        "alt": 2438,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782888609,
        "lat": 51.2637,
        "lon": -0.3565,
        "alt": 2438,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782888610,
        "lat": 51.2635,
        "lon": -0.3582,
        "alt": 1828,
        "hdg": 256,
        "onGround": false
      },
      {
        "t": 1782888611,
        "lat": 51.2634,
        "lon": -0.3596,
        "alt": 1828,
        "hdg": 258,
        "onGround": false
      },
      {
        "t": 1782888612,
        "lat": 51.2633,
        "lon": -0.3605,
        "alt": 1828,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782888613,
        "lat": 51.2631,
        "lon": -0.3631,
        "alt": 1828,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782888614,
        "lat": 51.263,
        "lon": -0.3654,
        "alt": 1828,
        "hdg": 264,
        "onGround": false
      },
      {
        "t": 1782888615,
        "lat": 51.2629,
        "lon": -0.3664,
        "alt": 1828,
        "hdg": 267,
        "onGround": false
      },
      {
        "t": 1782888616,
        "lat": 51.2629,
        "lon": -0.3683,
        "alt": 1828,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782888617,
        "lat": 51.2629,
        "lon": -0.37,
        "alt": 1828,
        "hdg": 271,
        "onGround": false
      },
      {
        "t": 1782888618,
        "lat": 51.263,
        "lon": -0.3726,
        "alt": 1828,
        "hdg": 273,
        "onGround": false
      },
      {
        "t": 1782888619,
        "lat": 51.2631,
        "lon": -0.3735,
        "alt": 1828,
        "hdg": 275,
        "onGround": false
      },
      {
        "t": 1782888620,
        "lat": 51.2633,
        "lon": -0.3754,
        "alt": 1828,
        "hdg": 277,
        "onGround": false
      },
      {
        "t": 1782888621,
        "lat": 51.2635,
        "lon": -0.3772,
        "alt": 1828,
        "hdg": 279,
        "onGround": false
      },
      {
        "t": 1782888622,
        "lat": 51.2637,
        "lon": -0.3788,
        "alt": 1828,
        "hdg": 282,
        "onGround": false
      },
      {
        "t": 1782888623,
        "lat": 51.264,
        "lon": -0.3807,
        "alt": 1828,
        "hdg": 284,
        "onGround": false
      },
      {
        "t": 1782888624,
        "lat": 51.2643,
        "lon": -0.3825,
        "alt": 1828,
        "hdg": 286,
        "onGround": false
      },
      {
        "t": 1782888625,
        "lat": 51.2646,
        "lon": -0.3839,
        "alt": 1828,
        "hdg": 288,
        "onGround": false
      },
      {
        "t": 1782888626,
        "lat": 51.2651,
        "lon": -0.386,
        "alt": 1828,
        "hdg": 290,
        "onGround": false
      },
      {
        "t": 1782888627,
        "lat": 51.2656,
        "lon": -0.3875,
        "alt": 1828,
        "hdg": 292,
        "onGround": false
      },
      {
        "t": 1782888628,
        "lat": 51.266,
        "lon": -0.3888,
        "alt": 1828,
        "hdg": 295,
        "onGround": false
      },
      {
        "t": 1782888629,
        "lat": 51.2664,
        "lon": -0.3901,
        "alt": 1828,
        "hdg": 297,
        "onGround": false
      },
      {
        "t": 1782888630,
        "lat": 51.267,
        "lon": -0.3919,
        "alt": 1828,
        "hdg": 299,
        "onGround": false
      },
      {
        "t": 1782888631,
        "lat": 51.2676,
        "lon": -0.3934,
        "alt": 1828,
        "hdg": 301,
        "onGround": false
      },
      {
        "t": 1782888632,
        "lat": 51.2682,
        "lon": -0.395,
        "alt": 1828,
        "hdg": 303,
        "onGround": false
      },
      {
        "t": 1782888633,
        "lat": 51.2689,
        "lon": -0.3965,
        "alt": 1828,
        "hdg": 305,
        "onGround": false
      },
      {
        "t": 1782888634,
        "lat": 51.2697,
        "lon": -0.3979,
        "alt": 1828,
        "hdg": 307,
        "onGround": false
      },
      {
        "t": 1782888635,
        "lat": 51.2704,
        "lon": -0.3994,
        "alt": 1828,
        "hdg": 309,
        "onGround": false
      },
      {
        "t": 1782888636,
        "lat": 51.2712,
        "lon": -0.4007,
        "alt": 1828,
        "hdg": 312,
        "onGround": false
      },
      {
        "t": 1782888637,
        "lat": 51.2719,
        "lon": -0.4019,
        "alt": 1828,
        "hdg": 314,
        "onGround": false
      },
      {
        "t": 1782888638,
        "lat": 51.2727,
        "lon": -0.4031,
        "alt": 1828,
        "hdg": 316,
        "onGround": false
      },
      {
        "t": 1782888639,
        "lat": 51.2735,
        "lon": -0.4041,
        "alt": 1828,
        "hdg": 318,
        "onGround": false
      },
      {
        "t": 1782888640,
        "lat": 51.2744,
        "lon": -0.4053,
        "alt": 1828,
        "hdg": 320,
        "onGround": false
      },
      {
        "t": 1782888641,
        "lat": 51.2751,
        "lon": -0.4062,
        "alt": 1828,
        "hdg": 322,
        "onGround": false
      },
      {
        "t": 1782888642,
        "lat": 51.2761,
        "lon": -0.4072,
        "alt": 1828,
        "hdg": 324,
        "onGround": false
      },
      {
        "t": 1782888643,
        "lat": 51.2769,
        "lon": -0.4081,
        "alt": 1828,
        "hdg": 326,
        "onGround": false
      },
      {
        "t": 1782888644,
        "lat": 51.2774,
        "lon": -0.4085,
        "alt": 1828,
        "hdg": 329,
        "onGround": false
      },
      {
        "t": 1782888645,
        "lat": 51.279,
        "lon": -0.4099,
        "alt": 1828,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782888646,
        "lat": 51.2799,
        "lon": -0.4107,
        "alt": 1828,
        "hdg": 333,
        "onGround": false
      },
      {
        "t": 1782888647,
        "lat": 51.2809,
        "lon": -0.4113,
        "alt": 1828,
        "hdg": 335,
        "onGround": false
      },
      {
        "t": 1782888648,
        "lat": 51.2819,
        "lon": -0.4121,
        "alt": 1828,
        "hdg": 337,
        "onGround": false
      },
      {
        "t": 1782888649,
        "lat": 51.2829,
        "lon": -0.4126,
        "alt": 1828,
        "hdg": 339,
        "onGround": false
      },
      {
        "t": 1782888650,
        "lat": 51.284,
        "lon": -0.4132,
        "alt": 1828,
        "hdg": 341,
        "onGround": false
      },
      {
        "t": 1782888651,
        "lat": 51.2851,
        "lon": -0.4137,
        "alt": 1828,
        "hdg": 343,
        "onGround": false
      },
      {
        "t": 1782888652,
        "lat": 51.2862,
        "lon": -0.4141,
        "alt": 1828,
        "hdg": 345,
        "onGround": false
      },
      {
        "t": 1782888653,
        "lat": 51.2873,
        "lon": -0.4144,
        "alt": 1828,
        "hdg": 347,
        "onGround": false
      },
      {
        "t": 1782888654,
        "lat": 51.2885,
        "lon": -0.4147,
        "alt": 1828,
        "hdg": 350,
        "onGround": false
      },
      {
        "t": 1782888655,
        "lat": 51.2896,
        "lon": -0.415,
        "alt": 1828,
        "hdg": 352,
        "onGround": false
      },
      {
        "t": 1782888656,
        "lat": 51.2905,
        "lon": -0.4151,
        "alt": 1828,
        "hdg": 354,
        "onGround": false
      },
      {
        "t": 1782888657,
        "lat": 51.2917,
        "lon": -0.4152,
        "alt": 1828,
        "hdg": 356,
        "onGround": false
      },
      {
        "t": 1782888658,
        "lat": 51.2922,
        "lon": -0.4152,
        "alt": 1828,
        "hdg": 358,
        "onGround": false
      },
      {
        "t": 1782888659,
        "lat": 51.2939,
        "lon": -0.4152,
        "alt": 1828,
        "hdg": 0,
        "onGround": false
      },
      {
        "t": 1782888660,
        "lat": 51.2945,
        "lon": -0.4151,
        "alt": 1828,
        "hdg": 2,
        "onGround": false
      },
      {
        "t": 1782888661,
        "lat": 51.2963,
        "lon": -0.4149,
        "alt": 1828,
        "hdg": 5,
        "onGround": false
      },
      {
        "t": 1782888662,
        "lat": 51.2974,
        "lon": -0.4147,
        "alt": 1828,
        "hdg": 7,
        "onGround": false
      },
      {
        "t": 1782888663,
        "lat": 51.2984,
        "lon": -0.4144,
        "alt": 1828,
        "hdg": 9,
        "onGround": false
      },
      {
        "t": 1782888664,
        "lat": 51.2994,
        "lon": -0.4141,
        "alt": 1828,
        "hdg": 11,
        "onGround": false
      },
      {
        "t": 1782888665,
        "lat": 51.3005,
        "lon": -0.4136,
        "alt": 1828,
        "hdg": 12,
        "onGround": false
      },
      {
        "t": 1782888666,
        "lat": 51.3017,
        "lon": -0.4131,
        "alt": 1828,
        "hdg": 14,
        "onGround": false
      },
      {
        "t": 1782888667,
        "lat": 51.3026,
        "lon": -0.4127,
        "alt": 1828,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782888669,
        "lat": 51.3047,
        "lon": -0.4115,
        "alt": 1828,
        "hdg": 18,
        "onGround": false
      },
      {
        "t": 1782888671,
        "lat": 51.3071,
        "lon": -0.4102,
        "alt": 1828,
        "hdg": 20,
        "onGround": false
      },
      {
        "t": 1782888678,
        "lat": 51.3139,
        "lon": -0.4057,
        "alt": 1828,
        "hdg": 22,
        "onGround": false
      },
      {
        "t": 1782888687,
        "lat": 51.3232,
        "lon": -0.3994,
        "alt": 1828,
        "hdg": 24,
        "onGround": false
      },
      {
        "t": 1782888689,
        "lat": 51.3251,
        "lon": -0.3978,
        "alt": 1828,
        "hdg": 27,
        "onGround": false
      },
      {
        "t": 1782888690,
        "lat": 51.3262,
        "lon": -0.3969,
        "alt": 1828,
        "hdg": 28,
        "onGround": false
      },
      {
        "t": 1782888691,
        "lat": 51.3271,
        "lon": -0.396,
        "alt": 1828,
        "hdg": 30,
        "onGround": false
      },
      {
        "t": 1782888692,
        "lat": 51.3282,
        "lon": -0.395,
        "alt": 1828,
        "hdg": 31,
        "onGround": false
      },
      {
        "t": 1782888693,
        "lat": 51.3291,
        "lon": -0.394,
        "alt": 1828,
        "hdg": 33,
        "onGround": false
      },
      {
        "t": 1782888694,
        "lat": 51.33,
        "lon": -0.3929,
        "alt": 1828,
        "hdg": 35,
        "onGround": false
      },
      {
        "t": 1782888695,
        "lat": 51.3307,
        "lon": -0.392,
        "alt": 1828,
        "hdg": 37,
        "onGround": false
      },
      {
        "t": 1782888696,
        "lat": 51.3316,
        "lon": -0.3908,
        "alt": 1828,
        "hdg": 40,
        "onGround": false
      },
      {
        "t": 1782888697,
        "lat": 51.3328,
        "lon": -0.3892,
        "alt": 1828,
        "hdg": 42,
        "onGround": false
      },
      {
        "t": 1782888698,
        "lat": 51.3335,
        "lon": -0.3879,
        "alt": 1828,
        "hdg": 44,
        "onGround": false
      },
      {
        "t": 1782888699,
        "lat": 51.3343,
        "lon": -0.3867,
        "alt": 1828,
        "hdg": 46,
        "onGround": false
      },
      {
        "t": 1782888700,
        "lat": 51.335,
        "lon": -0.3853,
        "alt": 1828,
        "hdg": 48,
        "onGround": false
      },
      {
        "t": 1782888701,
        "lat": 51.3357,
        "lon": -0.3839,
        "alt": 1828,
        "hdg": 50,
        "onGround": false
      },
      {
        "t": 1782888702,
        "lat": 51.3364,
        "lon": -0.3824,
        "alt": 1828,
        "hdg": 52,
        "onGround": false
      },
      {
        "t": 1782888704,
        "lat": 51.3371,
        "lon": -0.3807,
        "alt": 1828,
        "hdg": 54,
        "onGround": false
      },
      {
        "t": 1782888705,
        "lat": 51.3383,
        "lon": -0.3776,
        "alt": 1828,
        "hdg": 58,
        "onGround": false
      },
      {
        "t": 1782888706,
        "lat": 51.3388,
        "lon": -0.3761,
        "alt": 1828,
        "hdg": 60,
        "onGround": false
      },
      {
        "t": 1782888707,
        "lat": 51.3394,
        "lon": -0.3743,
        "alt": 1828,
        "hdg": 62,
        "onGround": false
      },
      {
        "t": 1782888708,
        "lat": 51.3399,
        "lon": -0.3726,
        "alt": 1828,
        "hdg": 64,
        "onGround": false
      },
      {
        "t": 1782888709,
        "lat": 51.3402,
        "lon": -0.3712,
        "alt": 1828,
        "hdg": 66,
        "onGround": false
      },
      {
        "t": 1782888710,
        "lat": 51.3406,
        "lon": -0.3695,
        "alt": 1828,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1782888711,
        "lat": 51.341,
        "lon": -0.3677,
        "alt": 1828,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782888712,
        "lat": 51.3413,
        "lon": -0.366,
        "alt": 1828,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1782888713,
        "lat": 51.3417,
        "lon": -0.3643,
        "alt": 1828,
        "hdg": 73,
        "onGround": false
      },
      {
        "t": 1782888714,
        "lat": 51.342,
        "lon": -0.3622,
        "alt": 1828,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782888716,
        "lat": 51.3424,
        "lon": -0.3592,
        "alt": 1828,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1782888718,
        "lat": 51.343,
        "lon": -0.3547,
        "alt": 1828,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782888722,
        "lat": 51.3437,
        "lon": -0.3476,
        "alt": 1828,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782888822,
        "lat": 51.3578,
        "lon": -0.1635,
        "alt": 1524,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1782888903,
        "lat": 51.3666,
        "lon": -0.0333,
        "alt": 1524,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782888905,
        "lat": 51.3669,
        "lon": -0.0303,
        "alt": 1524,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1782888906,
        "lat": 51.367,
        "lon": -0.0294,
        "alt": 1524,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782888907,
        "lat": 51.3674,
        "lon": -0.0272,
        "alt": 1524,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782888908,
        "lat": 51.3676,
        "lon": -0.0258,
        "alt": 1524,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1782888909,
        "lat": 51.3678,
        "lon": -0.0249,
        "alt": 1524,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1782888910,
        "lat": 51.3681,
        "lon": -0.0236,
        "alt": 1524,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1782888911,
        "lat": 51.3686,
        "lon": -0.0215,
        "alt": 1524,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1782888912,
        "lat": 51.369,
        "lon": -0.0202,
        "alt": 1524,
        "hdg": 66,
        "onGround": false
      },
      {
        "t": 1782888913,
        "lat": 51.3694,
        "lon": -0.0188,
        "alt": 1524,
        "hdg": 64,
        "onGround": false
      },
      {
        "t": 1782888914,
        "lat": 51.3699,
        "lon": -0.0175,
        "alt": 1524,
        "hdg": 62,
        "onGround": false
      },
      {
        "t": 1782888915,
        "lat": 51.3703,
        "lon": -0.0163,
        "alt": 1524,
        "hdg": 60,
        "onGround": false
      },
      {
        "t": 1782888916,
        "lat": 51.3708,
        "lon": -0.015,
        "alt": 1524,
        "hdg": 59,
        "onGround": false
      },
      {
        "t": 1782888917,
        "lat": 51.371,
        "lon": -0.0144,
        "alt": 1524,
        "hdg": 57,
        "onGround": false
      },
      {
        "t": 1782888918,
        "lat": 51.3717,
        "lon": -0.013,
        "alt": 1524,
        "hdg": 56,
        "onGround": false
      },
      {
        "t": 1782888919,
        "lat": 51.3724,
        "lon": -0.0114,
        "alt": 1524,
        "hdg": 54,
        "onGround": false
      },
      {
        "t": 1782888920,
        "lat": 51.373,
        "lon": -0.0102,
        "alt": 1524,
        "hdg": 52,
        "onGround": false
      },
      {
        "t": 1782888921,
        "lat": 51.3735,
        "lon": -0.0091,
        "alt": 1524,
        "hdg": 50,
        "onGround": false
      },
      {
        "t": 1782888922,
        "lat": 51.3741,
        "lon": -0.0082,
        "alt": 1524,
        "hdg": 48,
        "onGround": false
      },
      {
        "t": 1782888923,
        "lat": 51.3748,
        "lon": -0.0071,
        "alt": 1524,
        "hdg": 45,
        "onGround": false
      },
      {
        "t": 1782888924,
        "lat": 51.3754,
        "lon": -0.0062,
        "alt": 1524,
        "hdg": 43,
        "onGround": false
      },
      {
        "t": 1782888925,
        "lat": 51.3761,
        "lon": -0.0053,
        "alt": 1524,
        "hdg": 40,
        "onGround": false
      },
      {
        "t": 1782888926,
        "lat": 51.3769,
        "lon": -0.0043,
        "alt": 1524,
        "hdg": 38,
        "onGround": false
      },
      {
        "t": 1782888927,
        "lat": 51.3772,
        "lon": -0.0039,
        "alt": 1219,
        "hdg": 35,
        "onGround": false
      },
      {
        "t": 1782888928,
        "lat": 51.3781,
        "lon": -0.0031,
        "alt": 1219,
        "hdg": 32,
        "onGround": false
      },
      {
        "t": 1782888929,
        "lat": 51.3789,
        "lon": -0.0024,
        "alt": 1219,
        "hdg": 30,
        "onGround": false
      },
      {
        "t": 1782888930,
        "lat": 51.3798,
        "lon": -0.0017,
        "alt": 1219,
        "hdg": 27,
        "onGround": false
      },
      {
        "t": 1782888931,
        "lat": 51.3806,
        "lon": -0.001,
        "alt": 1219,
        "hdg": 24,
        "onGround": false
      },
      {
        "t": 1782888933,
        "lat": 51.3822,
        "lon": -0.0001,
        "alt": 1219,
        "hdg": 20,
        "onGround": false
      },
      {
        "t": 1782888934,
        "lat": 51.383,
        "lon": 0.0004,
        "alt": 1219,
        "hdg": 18,
        "onGround": false
      },
      {
        "t": 1782888935,
        "lat": 51.3839,
        "lon": 0.0008,
        "alt": 1219,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782888936,
        "lat": 51.3849,
        "lon": 0.0011,
        "alt": 1219,
        "hdg": 14,
        "onGround": false
      },
      {
        "t": 1782888937,
        "lat": 51.3857,
        "lon": 0.0014,
        "alt": 1219,
        "hdg": 13,
        "onGround": false
      },
      {
        "t": 1782888938,
        "lat": 51.3862,
        "lon": 0.0016,
        "alt": 1219,
        "hdg": 11,
        "onGround": false
      },
      {
        "t": 1782888940,
        "lat": 51.388,
        "lon": 0.0021,
        "alt": 1219,
        "hdg": 9,
        "onGround": false
      },
      {
        "t": 1782888942,
        "lat": 51.3898,
        "lon": 0.0025,
        "alt": 1219,
        "hdg": 7,
        "onGround": false
      },
      {
        "t": 1782888946,
        "lat": 51.3934,
        "lon": 0.0031,
        "alt": 1219,
        "hdg": 5,
        "onGround": false
      },
      {
        "t": 1782888959,
        "lat": 51.404,
        "lon": 0.0041,
        "alt": 1219,
        "hdg": 2,
        "onGround": false
      },
      {
        "t": 1782889002,
        "lat": 51.4417,
        "lon": 0.0069,
        "alt": 1219,
        "hdg": 0,
        "onGround": false
      },
      {
        "t": 1782889003,
        "lat": 51.4425,
        "lon": 0.0069,
        "alt": 1219,
        "hdg": 359,
        "onGround": false
      },
      {
        "t": 1782889005,
        "lat": 51.4438,
        "lon": 0.0068,
        "alt": 1219,
        "hdg": 355,
        "onGround": false
      },
      {
        "t": 1782889006,
        "lat": 51.4452,
        "lon": 0.0066,
        "alt": 1219,
        "hdg": 353,
        "onGround": false
      },
      {
        "t": 1782889007,
        "lat": 51.446,
        "lon": 0.0064,
        "alt": 1219,
        "hdg": 351,
        "onGround": false
      },
      {
        "t": 1782889008,
        "lat": 51.4468,
        "lon": 0.0061,
        "alt": 1219,
        "hdg": 349,
        "onGround": false
      },
      {
        "t": 1782889009,
        "lat": 51.4478,
        "lon": 0.0057,
        "alt": 1219,
        "hdg": 346,
        "onGround": false
      },
      {
        "t": 1782889010,
        "lat": 51.4484,
        "lon": 0.0053,
        "alt": 1219,
        "hdg": 343,
        "onGround": false
      },
      {
        "t": 1782889011,
        "lat": 51.4494,
        "lon": 0.0048,
        "alt": 1219,
        "hdg": 340,
        "onGround": false
      },
      {
        "t": 1782889012,
        "lat": 51.4502,
        "lon": 0.0043,
        "alt": 1219,
        "hdg": 338,
        "onGround": false
      },
      {
        "t": 1782889013,
        "lat": 51.4508,
        "lon": 0.0038,
        "alt": 1219,
        "hdg": 335,
        "onGround": false
      },
      {
        "t": 1782889014,
        "lat": 51.4514,
        "lon": 0.0033,
        "alt": 1219,
        "hdg": 332,
        "onGround": false
      },
      {
        "t": 1782889015,
        "lat": 51.4523,
        "lon": 0.0025,
        "alt": 1219,
        "hdg": 330,
        "onGround": false
      },
      {
        "t": 1782889016,
        "lat": 51.453,
        "lon": 0.0017,
        "alt": 1219,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782889017,
        "lat": 51.4538,
        "lon": 0.0009,
        "alt": 1219,
        "hdg": 324,
        "onGround": false
      },
      {
        "t": 1782889018,
        "lat": 51.4544,
        "lon": 0,
        "alt": 1219,
        "hdg": 322,
        "onGround": false
      },
      {
        "t": 1782889019,
        "lat": 51.4551,
        "lon": -0.0009,
        "alt": 1219,
        "hdg": 319,
        "onGround": false
      },
      {
        "t": 1782889020,
        "lat": 51.4557,
        "lon": -0.0019,
        "alt": 1219,
        "hdg": 317,
        "onGround": false
      },
      {
        "t": 1782889021,
        "lat": 51.456,
        "lon": -0.0024,
        "alt": 1219,
        "hdg": 315,
        "onGround": false
      },
      {
        "t": 1782889022,
        "lat": 51.4569,
        "lon": -0.0039,
        "alt": 1219,
        "hdg": 313,
        "onGround": false
      },
      {
        "t": 1782889023,
        "lat": 51.4574,
        "lon": -0.0049,
        "alt": 1219,
        "hdg": 311,
        "onGround": false
      },
      {
        "t": 1782889024,
        "lat": 51.4579,
        "lon": -0.0059,
        "alt": 1219,
        "hdg": 309,
        "onGround": false
      },
      {
        "t": 1782889025,
        "lat": 51.4585,
        "lon": -0.007,
        "alt": 1219,
        "hdg": 308,
        "onGround": false
      },
      {
        "t": 1782889026,
        "lat": 51.4589,
        "lon": -0.008,
        "alt": 1219,
        "hdg": 306,
        "onGround": false
      },
      {
        "t": 1782889028,
        "lat": 51.4599,
        "lon": -0.0101,
        "alt": 1219,
        "hdg": 304,
        "onGround": false
      },
      {
        "t": 1782889030,
        "lat": 51.4608,
        "lon": -0.0125,
        "alt": 1219,
        "hdg": 303,
        "onGround": false
      },
      {
        "t": 1782889034,
        "lat": 51.4626,
        "lon": -0.0171,
        "alt": 1219,
        "hdg": 301,
        "onGround": false
      },
      {
        "t": 1782889059,
        "lat": 51.4729,
        "lon": -0.0464,
        "alt": 1219,
        "hdg": 298,
        "onGround": false
      },
      {
        "t": 1782889064,
        "lat": 51.4749,
        "lon": -0.0524,
        "alt": 1219,
        "hdg": 296,
        "onGround": false
      },
      {
        "t": 1782889065,
        "lat": 51.4752,
        "lon": -0.0536,
        "alt": 1219,
        "hdg": 295,
        "onGround": false
      },
      {
        "t": 1782889066,
        "lat": 51.4756,
        "lon": -0.0551,
        "alt": 1219,
        "hdg": 293,
        "onGround": false
      },
      {
        "t": 1782889067,
        "lat": 51.4758,
        "lon": -0.0558,
        "alt": 1219,
        "hdg": 291,
        "onGround": false
      },
      {
        "t": 1782889069,
        "lat": 51.4762,
        "lon": -0.0577,
        "alt": 1219,
        "hdg": 289,
        "onGround": false
      },
      {
        "t": 1782889070,
        "lat": 51.4766,
        "lon": -0.0598,
        "alt": 1219,
        "hdg": 286,
        "onGround": false
      },
      {
        "t": 1782889071,
        "lat": 51.4768,
        "lon": -0.0612,
        "alt": 1219,
        "hdg": 284,
        "onGround": false
      },
      {
        "t": 1782889072,
        "lat": 51.477,
        "lon": -0.0627,
        "alt": 1219,
        "hdg": 282,
        "onGround": false
      },
      {
        "t": 1782889073,
        "lat": 51.4772,
        "lon": -0.0641,
        "alt": 1219,
        "hdg": 281,
        "onGround": false
      },
      {
        "t": 1782889074,
        "lat": 51.4773,
        "lon": -0.0653,
        "alt": 1219,
        "hdg": 279,
        "onGround": false
      },
      {
        "t": 1782889075,
        "lat": 51.4774,
        "lon": -0.0667,
        "alt": 1219,
        "hdg": 277,
        "onGround": false
      },
      {
        "t": 1782889076,
        "lat": 51.4775,
        "lon": -0.0681,
        "alt": 1219,
        "hdg": 276,
        "onGround": false
      },
      {
        "t": 1782889078,
        "lat": 51.4777,
        "lon": -0.071,
        "alt": 1219,
        "hdg": 274,
        "onGround": false
      },
      {
        "t": 1782889081,
        "lat": 51.4778,
        "lon": -0.0751,
        "alt": 1219,
        "hdg": 272,
        "onGround": false
      },
      {
        "t": 1782889118,
        "lat": 51.4781,
        "lon": -0.1264,
        "alt": 914,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782889154,
        "lat": 51.4783,
        "lon": -0.1751,
        "alt": 609,
        "hdg": 270,
        "onGround": false
      },
      {
        "t": 1782889218,
        "lat": 51.4781,
        "lon": -0.2552,
        "alt": 304,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782889287,
        "lat": 51.478,
        "lon": -0.3365,
        "alt": 0,
        "hdg": 270,
        "onGround": false
      },
      {
        "t": 1782889371,
        "lat": 51.4778,
        "lon": -0.4217,
        "alt": -304,
        "hdg": 270,
        "onGround": false
      },
      {
        "t": 1782889378,
        "lat": 51.4778,
        "lon": -0.4281,
        "alt": -304,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782900404,
        "lat": 51.4648,
        "lon": -0.4819,
        "alt": 0,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782900418,
        "lat": 51.4648,
        "lon": -0.4988,
        "alt": 0,
        "hdg": 271,
        "onGround": false
      },
      {
        "t": 1782900420,
        "lat": 51.4648,
        "lon": -0.5011,
        "alt": 0,
        "hdg": 273,
        "onGround": false
      },
      {
        "t": 1782900421,
        "lat": 51.4649,
        "lon": -0.5028,
        "alt": 304,
        "hdg": 274,
        "onGround": false
      },
      {
        "t": 1782900422,
        "lat": 51.465,
        "lon": -0.5039,
        "alt": 304,
        "hdg": 275,
        "onGround": false
      },
      {
        "t": 1782900423,
        "lat": 51.465,
        "lon": -0.5045,
        "alt": 304,
        "hdg": 276,
        "onGround": false
      },
      {
        "t": 1782900426,
        "lat": 51.4655,
        "lon": -0.5089,
        "alt": 304,
        "hdg": 280,
        "onGround": false
      },
      {
        "t": 1782900428,
        "lat": 51.4659,
        "lon": -0.5113,
        "alt": 304,
        "hdg": 283,
        "onGround": false
      },
      {
        "t": 1782900430,
        "lat": 51.4662,
        "lon": -0.5137,
        "alt": 304,
        "hdg": 285,
        "onGround": false
      },
      {
        "t": 1782900433,
        "lat": 51.4669,
        "lon": -0.5172,
        "alt": 304,
        "hdg": 287,
        "onGround": false
      },
      {
        "t": 1782900435,
        "lat": 51.4673,
        "lon": -0.519,
        "alt": 304,
        "hdg": 289,
        "onGround": false
      },
      {
        "t": 1782900437,
        "lat": 51.4681,
        "lon": -0.5221,
        "alt": 304,
        "hdg": 291,
        "onGround": false
      },
      {
        "t": 1782900440,
        "lat": 51.4691,
        "lon": -0.5259,
        "alt": 304,
        "hdg": 293,
        "onGround": false
      },
      {
        "t": 1782900442,
        "lat": 51.4698,
        "lon": -0.5282,
        "alt": 304,
        "hdg": 296,
        "onGround": false
      },
      {
        "t": 1782900445,
        "lat": 51.4709,
        "lon": -0.5318,
        "alt": 304,
        "hdg": 297,
        "onGround": false
      },
      {
        "t": 1782900475,
        "lat": 51.4848,
        "lon": -0.5709,
        "alt": 304,
        "hdg": 300,
        "onGround": false
      },
      {
        "t": 1782900491,
        "lat": 51.4931,
        "lon": -0.5953,
        "alt": 609,
        "hdg": 298,
        "onGround": false
      },
      {
        "t": 1782900522,
        "lat": 51.5096,
        "lon": -0.6457,
        "alt": 914,
        "hdg": 296,
        "onGround": false
      },
      {
        "t": 1782900525,
        "lat": 51.5114,
        "lon": -0.6509,
        "alt": 914,
        "hdg": 299,
        "onGround": false
      },
      {
        "t": 1782900527,
        "lat": 51.5122,
        "lon": -0.6532,
        "alt": 914,
        "hdg": 301,
        "onGround": false
      },
      {
        "t": 1782900529,
        "lat": 51.5139,
        "lon": -0.6571,
        "alt": 914,
        "hdg": 306,
        "onGround": false
      },
      {
        "t": 1782900530,
        "lat": 51.5146,
        "lon": -0.6587,
        "alt": 914,
        "hdg": 307,
        "onGround": false
      },
      {
        "t": 1782900531,
        "lat": 51.5154,
        "lon": -0.6602,
        "alt": 914,
        "hdg": 309,
        "onGround": false
      },
      {
        "t": 1782900532,
        "lat": 51.5157,
        "lon": -0.6609,
        "alt": 914,
        "hdg": 311,
        "onGround": false
      },
      {
        "t": 1782900534,
        "lat": 51.5174,
        "lon": -0.6638,
        "alt": 914,
        "hdg": 312,
        "onGround": false
      },
      {
        "t": 1782900535,
        "lat": 51.5182,
        "lon": -0.6652,
        "alt": 914,
        "hdg": 314,
        "onGround": false
      },
      {
        "t": 1782900536,
        "lat": 51.5191,
        "lon": -0.6665,
        "alt": 914,
        "hdg": 316,
        "onGround": false
      },
      {
        "t": 1782900537,
        "lat": 51.52,
        "lon": -0.6677,
        "alt": 914,
        "hdg": 318,
        "onGround": false
      },
      {
        "t": 1782900538,
        "lat": 51.5209,
        "lon": -0.669,
        "alt": 914,
        "hdg": 320,
        "onGround": false
      },
      {
        "t": 1782900539,
        "lat": 51.5215,
        "lon": -0.6696,
        "alt": 914,
        "hdg": 321,
        "onGround": false
      },
      {
        "t": 1782900540,
        "lat": 51.5229,
        "lon": -0.6713,
        "alt": 914,
        "hdg": 323,
        "onGround": false
      },
      {
        "t": 1782900541,
        "lat": 51.5238,
        "lon": -0.6722,
        "alt": 914,
        "hdg": 325,
        "onGround": false
      },
      {
        "t": 1782900542,
        "lat": 51.5248,
        "lon": -0.6732,
        "alt": 914,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782900543,
        "lat": 51.5259,
        "lon": -0.6741,
        "alt": 914,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782900545,
        "lat": 51.5279,
        "lon": -0.6757,
        "alt": 914,
        "hdg": 333,
        "onGround": false
      },
      {
        "t": 1782900547,
        "lat": 51.53,
        "lon": -0.6771,
        "alt": 914,
        "hdg": 337,
        "onGround": false
      },
      {
        "t": 1782900548,
        "lat": 51.5306,
        "lon": -0.6775,
        "alt": 914,
        "hdg": 339,
        "onGround": false
      },
      {
        "t": 1782900551,
        "lat": 51.5343,
        "lon": -0.6791,
        "alt": 1219,
        "hdg": 345,
        "onGround": false
      },
      {
        "t": 1782900552,
        "lat": 51.5354,
        "lon": -0.6796,
        "alt": 1219,
        "hdg": 347,
        "onGround": false
      },
      {
        "t": 1782900553,
        "lat": 51.5365,
        "lon": -0.6799,
        "alt": 1219,
        "hdg": 348,
        "onGround": false
      },
      {
        "t": 1782900557,
        "lat": 51.5415,
        "lon": -0.6814,
        "alt": 1219,
        "hdg": 350,
        "onGround": false
      },
      {
        "t": 1782900562,
        "lat": 51.5471,
        "lon": -0.6828,
        "alt": 1219,
        "hdg": 352,
        "onGround": false
      },
      {
        "t": 1782900565,
        "lat": 51.5506,
        "lon": -0.6834,
        "alt": 1219,
        "hdg": 354,
        "onGround": false
      },
      {
        "t": 1782900569,
        "lat": 51.5558,
        "lon": -0.6841,
        "alt": 1219,
        "hdg": 356,
        "onGround": false
      },
      {
        "t": 1782900579,
        "lat": 51.5677,
        "lon": -0.6847,
        "alt": 1524,
        "hdg": 358,
        "onGround": false
      },
      {
        "t": 1782900673,
        "lat": 51.6828,
        "lon": -0.6945,
        "alt": 1524,
        "hdg": 357,
        "onGround": false
      },
      {
        "t": 1782900674,
        "lat": 51.6847,
        "lon": -0.6946,
        "alt": 1524,
        "hdg": 359,
        "onGround": false
      },
      {
        "t": 1782900676,
        "lat": 51.687,
        "lon": -0.6945,
        "alt": 1524,
        "hdg": 0,
        "onGround": false
      },
      {
        "t": 1782900677,
        "lat": 51.688,
        "lon": -0.6944,
        "alt": 1524,
        "hdg": 1,
        "onGround": false
      },
      {
        "t": 1782900678,
        "lat": 51.6898,
        "lon": -0.6943,
        "alt": 1524,
        "hdg": 4,
        "onGround": false
      },
      {
        "t": 1782900681,
        "lat": 51.6934,
        "lon": -0.6937,
        "alt": 1524,
        "hdg": 6,
        "onGround": false
      },
      {
        "t": 1782900682,
        "lat": 51.6947,
        "lon": -0.6933,
        "alt": 1524,
        "hdg": 9,
        "onGround": false
      },
      {
        "t": 1782900685,
        "lat": 51.6979,
        "lon": -0.6924,
        "alt": 1524,
        "hdg": 11,
        "onGround": false
      },
      {
        "t": 1782900687,
        "lat": 51.7003,
        "lon": -0.6915,
        "alt": 1524,
        "hdg": 12,
        "onGround": false
      },
      {
        "t": 1782900690,
        "lat": 51.7042,
        "lon": -0.6899,
        "alt": 1524,
        "hdg": 14,
        "onGround": false
      },
      {
        "t": 1782900754,
        "lat": 51.7801,
        "lon": -0.6535,
        "alt": 1828,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782900783,
        "lat": 51.8154,
        "lon": -0.6361,
        "alt": 1828,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782900812,
        "lat": 51.851,
        "lon": -0.619,
        "alt": 2438,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782900840,
        "lat": 51.8856,
        "lon": -0.6019,
        "alt": 2743,
        "hdg": 17,
        "onGround": false
      },
      {
        "t": 1782900873,
        "lat": 51.9266,
        "lon": -0.5805,
        "alt": 3048,
        "hdg": 17,
        "onGround": false
      },
      {
        "t": 1782900929,
        "lat": 52.0019,
        "lon": -0.5418,
        "alt": 3048,
        "hdg": 16,
        "onGround": false
      },
      {
        "t": 1782900932,
        "lat": 52.006,
        "lon": -0.5401,
        "alt": 3048,
        "hdg": 13,
        "onGround": false
      },
      {
        "t": 1782900934,
        "lat": 52.0089,
        "lon": -0.5392,
        "alt": 3048,
        "hdg": 11,
        "onGround": false
      },
      {
        "t": 1782900936,
        "lat": 52.0117,
        "lon": -0.5384,
        "alt": 3048,
        "hdg": 9,
        "onGround": false
      },
      {
        "t": 1782900938,
        "lat": 52.0147,
        "lon": -0.5378,
        "alt": 3048,
        "hdg": 7,
        "onGround": false
      },
      {
        "t": 1782900940,
        "lat": 52.018,
        "lon": -0.5373,
        "alt": 3048,
        "hdg": 5,
        "onGround": false
      },
      {
        "t": 1782900942,
        "lat": 52.0203,
        "lon": -0.537,
        "alt": 3048,
        "hdg": 3,
        "onGround": false
      },
      {
        "t": 1782900944,
        "lat": 52.0242,
        "lon": -0.5367,
        "alt": 3352,
        "hdg": 1,
        "onGround": false
      },
      {
        "t": 1782900946,
        "lat": 52.0264,
        "lon": -0.5367,
        "alt": 3352,
        "hdg": 0,
        "onGround": false
      },
      {
        "t": 1782900947,
        "lat": 52.0284,
        "lon": -0.5368,
        "alt": 3352,
        "hdg": 359,
        "onGround": false
      },
      {
        "t": 1782900951,
        "lat": 52.0348,
        "lon": -0.5372,
        "alt": 3352,
        "hdg": 357,
        "onGround": false
      },
      {
        "t": 1782900976,
        "lat": 52.0752,
        "lon": -0.541,
        "alt": 3352,
        "hdg": 355,
        "onGround": false
      },
      {
        "t": 1782900981,
        "lat": 52.0833,
        "lon": -0.5424,
        "alt": 3352,
        "hdg": 353,
        "onGround": false
      },
      {
        "t": 1782900986,
        "lat": 52.0917,
        "lon": -0.5445,
        "alt": 3352,
        "hdg": 350,
        "onGround": false
      },
      {
        "t": 1782900990,
        "lat": 52.0983,
        "lon": -0.5465,
        "alt": 3352,
        "hdg": 348,
        "onGround": false
      },
      {
        "t": 1782901004,
        "lat": 52.1214,
        "lon": -0.5553,
        "alt": 3657,
        "hdg": 346,
        "onGround": false
      },
      {
        "t": 1782901035,
        "lat": 52.1722,
        "lon": -0.5758,
        "alt": 3962,
        "hdg": 346,
        "onGround": false
      },
      {
        "t": 1782901071,
        "lat": 52.2309,
        "lon": -0.599,
        "alt": 3962,
        "hdg": 346,
        "onGround": false
      },
      {
        "t": 1782901105,
        "lat": 52.2871,
        "lon": -0.6212,
        "alt": 4572,
        "hdg": 346,
        "onGround": false
      },
      {
        "t": 1782901146,
        "lat": 52.3561,
        "lon": -0.6487,
        "alt": 4876,
        "hdg": 344,
        "onGround": false
      },
      {
        "t": 1782901147,
        "lat": 52.3578,
        "lon": -0.6595,
        "alt": 4876,
        "hdg": 344,
        "onGround": false
      },
      {
        "t": 1782901157,
        "lat": 52.3739,
        "lon": -0.6593,
        "alt": 4876,
        "hdg": 335,
        "onGround": false
      },
      {
        "t": 1782901160,
        "lat": 52.3784,
        "lon": -0.6631,
        "alt": 4876,
        "hdg": 332,
        "onGround": false
      },
      {
        "t": 1782901162,
        "lat": 52.3808,
        "lon": -0.6653,
        "alt": 4876,
        "hdg": 330,
        "onGround": false
      },
      {
        "t": 1782901190,
        "lat": 52.4229,
        "lon": -0.7083,
        "alt": 5181,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901236,
        "lat": 52.4912,
        "lon": -0.7779,
        "alt": 5486,
        "hdg": 328,
        "onGround": false
      },
      {
        "t": 1782901279,
        "lat": 52.5554,
        "lon": -0.8435,
        "alt": 5791,
        "hdg": 328,
        "onGround": false
      },
      {
        "t": 1782901317,
        "lat": 52.6123,
        "lon": -0.9019,
        "alt": 6096,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901370,
        "lat": 52.6919,
        "lon": -0.9839,
        "alt": 6400,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901412,
        "lat": 52.7553,
        "lon": -1.0495,
        "alt": 6705,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901452,
        "lat": 52.8163,
        "lon": -1.1128,
        "alt": 7010,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901500,
        "lat": 52.8899,
        "lon": -1.1895,
        "alt": 7315,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901548,
        "lat": 52.964,
        "lon": -1.2669,
        "alt": 7620,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901609,
        "lat": 53.0576,
        "lon": -1.3654,
        "alt": 7924,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901683,
        "lat": 53.1747,
        "lon": -1.4892,
        "alt": 8229,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901745,
        "lat": 53.2743,
        "lon": -1.595,
        "alt": 8229,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901799,
        "lat": 53.3606,
        "lon": -1.6875,
        "alt": 8839,
        "hdg": 327,
        "onGround": false
      },
      {
        "t": 1782901842,
        "lat": 53.428,
        "lon": -1.7594,
        "alt": 8839,
        "hdg": 329,
        "onGround": false
      },
      {
        "t": 1782901851,
        "lat": 53.4425,
        "lon": -1.7733,
        "alt": 9144,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782901900,
        "lat": 53.5215,
        "lon": -1.8434,
        "alt": 9448,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782901973,
        "lat": 53.6375,
        "lon": -1.9469,
        "alt": 9753,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782902105,
        "lat": 53.8475,
        "lon": -2.136,
        "alt": 9753,
        "hdg": 331,
        "onGround": false
      },
      {
        "t": 1782902113,
        "lat": 53.8601,
        "lon": -2.1483,
        "alt": 9753,
        "hdg": 328,
        "onGround": false
      },
      {
        "t": 1782902121,
        "lat": 53.8724,
        "lon": -2.1616,
        "alt": 9753,
        "hdg": 326,
        "onGround": false
      },
      {
        "t": 1782903007,
        "lat": 55.1876,
        "lon": -3.7208,
        "alt": 9753,
        "hdg": 324,
        "onGround": false
      },
      {
        "t": 1782904490,
        "lat": 57.3937,
        "lon": -6.6913,
        "alt": 9753,
        "hdg": 321,
        "onGround": false
      },
      {
        "t": 1782908576,
        "lat": 62.1496,
        "lon": -20.4863,
        "alt": 10363,
        "hdg": 302,
        "onGround": false
      },
      {
        "t": 1782908879,
        "lat": 62.5085,
        "lon": -21.7,
        "alt": 10363,
        "hdg": 301,
        "onGround": false
      },
      {
        "t": 1782909560,
        "lat": 63.2657,
        "lon": -24.4969,
        "alt": 10363,
        "hdg": 299,
        "onGround": false
      },
      {
        "t": 1782910189,
        "lat": 63.918,
        "lon": -27.228,
        "alt": 10363,
        "hdg": 296,
        "onGround": false
      },
      {
        "t": 1782927382,
        "lat": 52.0636,
        "lon": -102.3581,
        "alt": 11582,
        "hdg": 215,
        "onGround": false
      },
      {
        "t": 1782927387,
        "lat": 52.0547,
        "lon": -102.3684,
        "alt": 11582,
        "hdg": 215,
        "onGround": false
      },
      {
        "t": 1782930780,
        "lat": 46.1322,
        "lon": -108.599,
        "alt": 11582,
        "hdg": 210,
        "onGround": false
      },
      {
        "t": 1782931049,
        "lat": 45.6634,
        "lon": -108.9966,
        "alt": 11582,
        "hdg": 210,
        "onGround": false
      },
      {
        "t": 1782932522,
        "lat": 43.0929,
        "lon": -111.047,
        "alt": 9753,
        "hdg": 0,
        "onGround": false
      },
      {
        "t": 1782932640,
        "lat": 42.8827,
        "lon": -111.2058,
        "alt": 9448,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782932684,
        "lat": 42.8042,
        "lon": -111.2648,
        "alt": 9144,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782932756,
        "lat": 42.6776,
        "lon": -111.3596,
        "alt": 8839,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782932762,
        "lat": 42.6668,
        "lon": -111.3677,
        "alt": 9144,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782932974,
        "lat": 42.2918,
        "lon": -111.6457,
        "alt": 8839,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782932996,
        "lat": 42.2524,
        "lon": -111.6748,
        "alt": 8229,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933007,
        "lat": 42.2324,
        "lon": -111.6894,
        "alt": 8229,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933019,
        "lat": 42.211,
        "lon": -111.705,
        "alt": 7924,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933033,
        "lat": 42.186,
        "lon": -111.7233,
        "alt": 7620,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933054,
        "lat": 42.1513,
        "lon": -111.7487,
        "alt": 7315,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933080,
        "lat": 42.1071,
        "lon": -111.7811,
        "alt": 7010,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933110,
        "lat": 42.0569,
        "lon": -111.8178,
        "alt": 6705,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933139,
        "lat": 42.0089,
        "lon": -111.8527,
        "alt": 6400,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933169,
        "lat": 41.9594,
        "lon": -111.8889,
        "alt": 6096,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933198,
        "lat": 41.9113,
        "lon": -111.9239,
        "alt": 5791,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933227,
        "lat": 41.8629,
        "lon": -111.9591,
        "alt": 5486,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933256,
        "lat": 41.8167,
        "lon": -111.9925,
        "alt": 5181,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782933262,
        "lat": 41.808,
        "lon": -111.9986,
        "alt": 5181,
        "hdg": 206,
        "onGround": false
      },
      {
        "t": 1782933265,
        "lat": 41.8028,
        "lon": -112.0019,
        "alt": 5181,
        "hdg": 204,
        "onGround": false
      },
      {
        "t": 1782933267,
        "lat": 41.7995,
        "lon": -112.0038,
        "alt": 5181,
        "hdg": 202,
        "onGround": false
      },
      {
        "t": 1782933269,
        "lat": 41.7961,
        "lon": -112.0056,
        "alt": 5181,
        "hdg": 200,
        "onGround": false
      },
      {
        "t": 1782933271,
        "lat": 41.7926,
        "lon": -112.0071,
        "alt": 5181,
        "hdg": 198,
        "onGround": false
      },
      {
        "t": 1782933273,
        "lat": 41.7894,
        "lon": -112.0084,
        "alt": 5181,
        "hdg": 196,
        "onGround": false
      },
      {
        "t": 1782933275,
        "lat": 41.7859,
        "lon": -112.0096,
        "alt": 5181,
        "hdg": 194,
        "onGround": false
      },
      {
        "t": 1782933276,
        "lat": 41.7843,
        "lon": -112.0102,
        "alt": 5181,
        "hdg": 193,
        "onGround": false
      },
      {
        "t": 1782933278,
        "lat": 41.781,
        "lon": -112.011,
        "alt": 5181,
        "hdg": 191,
        "onGround": false
      },
      {
        "t": 1782933280,
        "lat": 41.7777,
        "lon": -112.0117,
        "alt": 5181,
        "hdg": 189,
        "onGround": false
      },
      {
        "t": 1782933287,
        "lat": 41.7654,
        "lon": -112.014,
        "alt": 4876,
        "hdg": 187,
        "onGround": false
      },
      {
        "t": 1782933330,
        "lat": 41.6941,
        "lon": -112.0251,
        "alt": 4572,
        "hdg": 186,
        "onGround": false
      },
      {
        "t": 1782933379,
        "lat": 41.6245,
        "lon": -112.036,
        "alt": 3962,
        "hdg": 186,
        "onGround": false
      },
      {
        "t": 1782933417,
        "lat": 41.5723,
        "lon": -112.0442,
        "alt": 3962,
        "hdg": 186,
        "onGround": false
      },
      {
        "t": 1782933423,
        "lat": 41.5643,
        "lon": -112.0451,
        "alt": 3962,
        "hdg": 184,
        "onGround": false
      },
      {
        "t": 1782933427,
        "lat": 41.5586,
        "lon": -112.0454,
        "alt": 3962,
        "hdg": 181,
        "onGround": false
      },
      {
        "t": 1782933430,
        "lat": 41.5546,
        "lon": -112.0455,
        "alt": 3962,
        "hdg": 179,
        "onGround": false
      },
      {
        "t": 1782933475,
        "lat": 41.4934,
        "lon": -112.0423,
        "alt": 3657,
        "hdg": 177,
        "onGround": false
      },
      {
        "t": 1782933522,
        "lat": 41.4305,
        "lon": -112.0386,
        "alt": 3352,
        "hdg": 177,
        "onGround": false
      },
      {
        "t": 1782933616,
        "lat": 41.3065,
        "lon": -112.0319,
        "alt": 3048,
        "hdg": 177,
        "onGround": false
      },
      {
        "t": 1782933664,
        "lat": 41.2467,
        "lon": -112.0286,
        "alt": 3048,
        "hdg": 177,
        "onGround": false
      },
      {
        "t": 1782933704,
        "lat": 41.2004,
        "lon": -112.0225,
        "alt": 2743,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782933834,
        "lat": 41.0573,
        "lon": -112.0059,
        "alt": 2438,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782933891,
        "lat": 41.0048,
        "lon": -111.9999,
        "alt": 1828,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782933950,
        "lat": 40.9533,
        "lon": -111.9938,
        "alt": 1828,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782934013,
        "lat": 40.8985,
        "lon": -111.9875,
        "alt": 1524,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782934082,
        "lat": 40.8454,
        "lon": -111.9812,
        "alt": 1219,
        "hdg": 175,
        "onGround": false
      },
      {
        "t": 1782934158,
        "lat": 40.7969,
        "lon": -111.9757,
        "alt": 1219,
        "hdg": 174,
        "onGround": false
      }
    ]
  },
  {
    "label": "Domestic",
    "icao24": "ac4963",
    "callsign": "DAL2298",
    "registration": "N891DN",
    "aircraftType": "737NG 900ER/W",
    "date": "2026-07-02",
    "source": "bundled",
    "note": "A real flight-day recorded from the OpenSky Network, saved into the app. Live lookups of other aircraft only work when the app is run locally — see the README.",
    "flights": [
      {
        "callsign": "DAL2298",
        "from": "KORD",
        "to": "KLAX",
        "dep": 1782951295,
        "arr": 1782965194
      },
      {
        "callsign": "DAL768",
        "from": "KLAX",
        "to": "KBNA",
        "dep": 1782998353,
        "arr": 1783010787
      }
    ],
    "waypoints": [
      {
        "t": 1782951295,
        "lat": 41.9503,
        "lon": -87.9031,
        "alt": 304,
        "hdg": 222,
        "onGround": false
      },
      {
        "t": 1782951297,
        "lat": 41.9495,
        "lon": -87.9041,
        "alt": 304,
        "hdg": 224,
        "onGround": false
      },
      {
        "t": 1782951299,
        "lat": 41.9483,
        "lon": -87.906,
        "alt": 304,
        "hdg": 229,
        "onGround": false
      },
      {
        "t": 1782951300,
        "lat": 41.9478,
        "lon": -87.9068,
        "alt": 304,
        "hdg": 231,
        "onGround": false
      },
      {
        "t": 1782951302,
        "lat": 41.9472,
        "lon": -87.908,
        "alt": 304,
        "hdg": 236,
        "onGround": false
      },
      {
        "t": 1782951303,
        "lat": 41.9466,
        "lon": -87.9092,
        "alt": 304,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782951304,
        "lat": 41.9465,
        "lon": -87.9096,
        "alt": 304,
        "hdg": 240,
        "onGround": false
      },
      {
        "t": 1782951306,
        "lat": 41.9457,
        "lon": -87.9116,
        "alt": 304,
        "hdg": 244,
        "onGround": false
      },
      {
        "t": 1782951309,
        "lat": 41.9449,
        "lon": -87.9143,
        "alt": 304,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782951313,
        "lat": 41.9438,
        "lon": -87.918,
        "alt": 609,
        "hdg": 249,
        "onGround": false
      },
      {
        "t": 1782951361,
        "lat": 41.9304,
        "lon": -87.9665,
        "alt": 914,
        "hdg": 249,
        "onGround": false
      },
      {
        "t": 1782951391,
        "lat": 41.9207,
        "lon": -88.0025,
        "alt": 914,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782951393,
        "lat": 41.9202,
        "lon": -88.0045,
        "alt": 914,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782951394,
        "lat": 41.92,
        "lon": -88.0059,
        "alt": 914,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782951395,
        "lat": 41.9198,
        "lon": -88.0065,
        "alt": 914,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782951396,
        "lat": 41.9195,
        "lon": -88.0087,
        "alt": 914,
        "hdg": 258,
        "onGround": false
      },
      {
        "t": 1782951397,
        "lat": 41.9194,
        "lon": -88.0099,
        "alt": 914,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782951398,
        "lat": 41.9193,
        "lon": -88.0106,
        "alt": 914,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782951399,
        "lat": 41.9191,
        "lon": -88.0128,
        "alt": 914,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782951400,
        "lat": 41.919,
        "lon": -88.0142,
        "alt": 914,
        "hdg": 265,
        "onGround": false
      },
      {
        "t": 1782951401,
        "lat": 41.9189,
        "lon": -88.0158,
        "alt": 914,
        "hdg": 266,
        "onGround": false
      },
      {
        "t": 1782951404,
        "lat": 41.9188,
        "lon": -88.0202,
        "alt": 1219,
        "hdg": 268,
        "onGround": false
      },
      {
        "t": 1782951453,
        "lat": 41.9187,
        "lon": -88.0965,
        "alt": 1524,
        "hdg": 270,
        "onGround": false
      },
      {
        "t": 1782951497,
        "lat": 41.9187,
        "lon": -88.1692,
        "alt": 1828,
        "hdg": 268,
        "onGround": false
      },
      {
        "t": 1782951518,
        "lat": 41.9182,
        "lon": -88.2024,
        "alt": 1828,
        "hdg": 268,
        "onGround": false
      },
      {
        "t": 1782951542,
        "lat": 41.9175,
        "lon": -88.2399,
        "alt": 2438,
        "hdg": 269,
        "onGround": false
      },
      {
        "t": 1782951560,
        "lat": 41.9172,
        "lon": -88.268,
        "alt": 2438,
        "hdg": 266,
        "onGround": false
      },
      {
        "t": 1782951562,
        "lat": 41.917,
        "lon": -88.2716,
        "alt": 2438,
        "hdg": 265,
        "onGround": false
      },
      {
        "t": 1782951564,
        "lat": 41.9167,
        "lon": -88.2748,
        "alt": 2438,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782951566,
        "lat": 41.9165,
        "lon": -88.2773,
        "alt": 2438,
        "hdg": 261,
        "onGround": false
      },
      {
        "t": 1782951569,
        "lat": 41.9158,
        "lon": -88.2822,
        "alt": 2743,
        "hdg": 258,
        "onGround": false
      },
      {
        "t": 1782951571,
        "lat": 41.9152,
        "lon": -88.2859,
        "alt": 2743,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782951574,
        "lat": 41.9144,
        "lon": -88.2904,
        "alt": 2743,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782951595,
        "lat": 41.9071,
        "lon": -88.3225,
        "alt": 3048,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782951622,
        "lat": 41.8978,
        "lon": -88.3643,
        "alt": 3352,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782951647,
        "lat": 41.8892,
        "lon": -88.4024,
        "alt": 3657,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782951678,
        "lat": 41.8779,
        "lon": -88.451,
        "alt": 3962,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782951718,
        "lat": 41.8631,
        "lon": -88.5165,
        "alt": 3962,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782951791,
        "lat": 41.8319,
        "lon": -88.6549,
        "alt": 4572,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782951838,
        "lat": 41.8087,
        "lon": -88.7561,
        "alt": 4876,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782951860,
        "lat": 41.7977,
        "lon": -88.804,
        "alt": 4876,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782951865,
        "lat": 41.7955,
        "lon": -88.8152,
        "alt": 4876,
        "hdg": 256,
        "onGround": false
      },
      {
        "t": 1782951869,
        "lat": 41.7939,
        "lon": -88.825,
        "alt": 4876,
        "hdg": 258,
        "onGround": false
      },
      {
        "t": 1782951873,
        "lat": 41.7928,
        "lon": -88.8337,
        "alt": 5181,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782951913,
        "lat": 41.7811,
        "lon": -88.9273,
        "alt": 5486,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782951951,
        "lat": 41.7697,
        "lon": -89.0174,
        "alt": 5791,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782951990,
        "lat": 41.7569,
        "lon": -89.11,
        "alt": 6096,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952035,
        "lat": 41.742,
        "lon": -89.2208,
        "alt": 6400,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952077,
        "lat": 41.7282,
        "lon": -89.3249,
        "alt": 6705,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952116,
        "lat": 41.7151,
        "lon": -89.4226,
        "alt": 7010,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952181,
        "lat": 41.6925,
        "lon": -89.5879,
        "alt": 7315,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952240,
        "lat": 41.6716,
        "lon": -89.7417,
        "alt": 7620,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782952296,
        "lat": 41.6478,
        "lon": -89.8881,
        "alt": 7924,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952371,
        "lat": 41.6148,
        "lon": -90.088,
        "alt": 8229,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952438,
        "lat": 41.5853,
        "lon": -90.2686,
        "alt": 8229,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952491,
        "lat": 41.5618,
        "lon": -90.4102,
        "alt": 8839,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952561,
        "lat": 41.5308,
        "lon": -90.5951,
        "alt": 9144,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952648,
        "lat": 41.4907,
        "lon": -90.8315,
        "alt": 9448,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952707,
        "lat": 41.4639,
        "lon": -90.9892,
        "alt": 9753,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782952758,
        "lat": 41.4409,
        "lon": -91.1247,
        "alt": 10058,
        "hdg": 256,
        "onGround": false
      },
      {
        "t": 1782952811,
        "lat": 41.4163,
        "lon": -91.264,
        "alt": 10363,
        "hdg": 256,
        "onGround": false
      },
      {
        "t": 1782953688,
        "lat": 41.0035,
        "lon": -93.4879,
        "alt": 10363,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782953694,
        "lat": 41.0012,
        "lon": -93.5037,
        "alt": 10363,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782953701,
        "lat": 40.9992,
        "lon": -93.5215,
        "alt": 10363,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782953707,
        "lat": 40.9979,
        "lon": -93.5361,
        "alt": 10363,
        "hdg": 264,
        "onGround": false
      },
      {
        "t": 1782953713,
        "lat": 40.997,
        "lon": -93.5531,
        "alt": 10363,
        "hdg": 266,
        "onGround": false
      },
      {
        "t": 1782953884,
        "lat": 40.9997,
        "lon": -94.0012,
        "alt": 10363,
        "hdg": 268,
        "onGround": false
      },
      {
        "t": 1782954382,
        "lat": 40.9469,
        "lon": -95.2799,
        "alt": 10363,
        "hdg": 266,
        "onGround": false
      },
      {
        "t": 1782955605,
        "lat": 40.762,
        "lon": -98.3373,
        "alt": 10363,
        "hdg": 264,
        "onGround": false
      },
      {
        "t": 1782955611,
        "lat": 40.7605,
        "lon": -98.3531,
        "alt": 10363,
        "hdg": 261,
        "onGround": false
      },
      {
        "t": 1782955616,
        "lat": 40.7589,
        "lon": -98.3657,
        "alt": 10363,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782955622,
        "lat": 40.7566,
        "lon": -98.38,
        "alt": 10363,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782955628,
        "lat": 40.7541,
        "lon": -98.3937,
        "alt": 10363,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782955634,
        "lat": 40.7509,
        "lon": -98.4087,
        "alt": 10363,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782955681,
        "lat": 40.7247,
        "lon": -98.5181,
        "alt": 10363,
        "hdg": 250,
        "onGround": false
      },
      {
        "t": 1782955684,
        "lat": 40.7227,
        "lon": -98.525,
        "alt": 10363,
        "hdg": 248,
        "onGround": false
      },
      {
        "t": 1782955686,
        "lat": 40.7211,
        "lon": -98.5302,
        "alt": 10363,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782955689,
        "lat": 40.7191,
        "lon": -98.5362,
        "alt": 10363,
        "hdg": 245,
        "onGround": false
      },
      {
        "t": 1782955692,
        "lat": 40.7163,
        "lon": -98.5436,
        "alt": 10363,
        "hdg": 242,
        "onGround": false
      },
      {
        "t": 1782955695,
        "lat": 40.7137,
        "lon": -98.5498,
        "alt": 10363,
        "hdg": 240,
        "onGround": false
      },
      {
        "t": 1782955698,
        "lat": 40.7109,
        "lon": -98.556,
        "alt": 10363,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782955701,
        "lat": 40.7085,
        "lon": -98.5609,
        "alt": 10363,
        "hdg": 236,
        "onGround": false
      },
      {
        "t": 1782956071,
        "lat": 40.3082,
        "lon": -99.273,
        "alt": 10363,
        "hdg": 234,
        "onGround": false
      },
      {
        "t": 1782956077,
        "lat": 40.3017,
        "lon": -99.2854,
        "alt": 10363,
        "hdg": 236,
        "onGround": false
      },
      {
        "t": 1782956124,
        "lat": 40.2569,
        "lon": -99.3804,
        "alt": 10363,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782956384,
        "lat": 40.0232,
        "lon": -99.9291,
        "alt": 10363,
        "hdg": 241,
        "onGround": false
      },
      {
        "t": 1782956858,
        "lat": 39.7492,
        "lon": -100.9936,
        "alt": 10363,
        "hdg": 256,
        "onGround": false
      },
      {
        "t": 1782957566,
        "lat": 39.4203,
        "lon": -102.6499,
        "alt": 10058,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782957567,
        "lat": 39.4198,
        "lon": -102.6522,
        "alt": 10363,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782957882,
        "lat": 39.2591,
        "lon": -103.4146,
        "alt": 10058,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782957888,
        "lat": 39.2558,
        "lon": -103.4298,
        "alt": 10363,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782958094,
        "lat": 39.1488,
        "lon": -103.9238,
        "alt": 10058,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782958100,
        "lat": 39.1459,
        "lon": -103.9372,
        "alt": 10363,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782959501,
        "lat": 38.3719,
        "lon": -107.2163,
        "alt": 10058,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782959502,
        "lat": 38.3714,
        "lon": -107.2181,
        "alt": 10363,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782959503,
        "lat": 38.3708,
        "lon": -107.2204,
        "alt": 10058,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782959504,
        "lat": 38.3702,
        "lon": -107.2227,
        "alt": 10363,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782961117,
        "lat": 37.3601,
        "lon": -110.9353,
        "alt": 10363,
        "hdg": 250,
        "onGround": false
      },
      {
        "t": 1782962156,
        "lat": 36.637,
        "lon": -113.309,
        "alt": 10363,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782962162,
        "lat": 36.6323,
        "lon": -113.322,
        "alt": 10363,
        "hdg": 245,
        "onGround": false
      },
      {
        "t": 1782962168,
        "lat": 36.6271,
        "lon": -113.3353,
        "alt": 10363,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782962175,
        "lat": 36.6213,
        "lon": -113.3487,
        "alt": 10363,
        "hdg": 240,
        "onGround": false
      },
      {
        "t": 1782962182,
        "lat": 36.6139,
        "lon": -113.3641,
        "alt": 10363,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782962188,
        "lat": 36.6071,
        "lon": -113.377,
        "alt": 10363,
        "hdg": 235,
        "onGround": false
      },
      {
        "t": 1782962643,
        "lat": 36.092,
        "lon": -114.2746,
        "alt": 10363,
        "hdg": 233,
        "onGround": false
      },
      {
        "t": 1782962649,
        "lat": 36.0848,
        "lon": -114.2862,
        "alt": 10363,
        "hdg": 231,
        "onGround": false
      },
      {
        "t": 1782962656,
        "lat": 36.0754,
        "lon": -114.2999,
        "alt": 10363,
        "hdg": 228,
        "onGround": false
      },
      {
        "t": 1782963812,
        "lat": 34.525,
        "lon": -116.3407,
        "alt": 10058,
        "hdg": 226,
        "onGround": false
      },
      {
        "t": 1782963843,
        "lat": 34.4827,
        "lon": -116.3941,
        "alt": 9753,
        "hdg": 226,
        "onGround": false
      },
      {
        "t": 1782963863,
        "lat": 34.4558,
        "lon": -116.4282,
        "alt": 9448,
        "hdg": 226,
        "onGround": false
      },
      {
        "t": 1782963875,
        "lat": 34.4402,
        "lon": -116.448,
        "alt": 9448,
        "hdg": 227,
        "onGround": false
      },
      {
        "t": 1782963880,
        "lat": 34.4334,
        "lon": -116.4572,
        "alt": 9448,
        "hdg": 229,
        "onGround": false
      },
      {
        "t": 1782963885,
        "lat": 34.4276,
        "lon": -116.4658,
        "alt": 9448,
        "hdg": 231,
        "onGround": false
      },
      {
        "t": 1782963891,
        "lat": 34.4206,
        "lon": -116.4772,
        "alt": 9144,
        "hdg": 234,
        "onGround": false
      },
      {
        "t": 1782963896,
        "lat": 34.4154,
        "lon": -116.4862,
        "alt": 9144,
        "hdg": 236,
        "onGround": false
      },
      {
        "t": 1782963901,
        "lat": 34.4105,
        "lon": -116.4956,
        "alt": 9144,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782963907,
        "lat": 34.4049,
        "lon": -116.5073,
        "alt": 9144,
        "hdg": 241,
        "onGround": false
      },
      {
        "t": 1782963918,
        "lat": 34.3954,
        "lon": -116.5296,
        "alt": 8839,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782963948,
        "lat": 34.3715,
        "lon": -116.5875,
        "alt": 8229,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782963977,
        "lat": 34.3488,
        "lon": -116.6426,
        "alt": 8229,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782964008,
        "lat": 34.3251,
        "lon": -116.7,
        "alt": 7924,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782964039,
        "lat": 34.3024,
        "lon": -116.7564,
        "alt": 7620,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782964070,
        "lat": 34.2796,
        "lon": -116.8136,
        "alt": 7315,
        "hdg": 244,
        "onGround": false
      },
      {
        "t": 1782964110,
        "lat": 34.2522,
        "lon": -116.8818,
        "alt": 7010,
        "hdg": 243,
        "onGround": false
      },
      {
        "t": 1782964144,
        "lat": 34.2294,
        "lon": -116.9379,
        "alt": 6705,
        "hdg": 244,
        "onGround": false
      },
      {
        "t": 1782964169,
        "lat": 34.2136,
        "lon": -116.9774,
        "alt": 6705,
        "hdg": 245,
        "onGround": false
      },
      {
        "t": 1782964173,
        "lat": 34.2112,
        "lon": -116.9842,
        "alt": 6400,
        "hdg": 248,
        "onGround": false
      },
      {
        "t": 1782964176,
        "lat": 34.2096,
        "lon": -116.9893,
        "alt": 6400,
        "hdg": 249,
        "onGround": false
      },
      {
        "t": 1782964200,
        "lat": 34.1988,
        "lon": -117.0292,
        "alt": 6096,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782964225,
        "lat": 34.1875,
        "lon": -117.0712,
        "alt": 5791,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964255,
        "lat": 34.173,
        "lon": -117.1239,
        "alt": 5486,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964285,
        "lat": 34.1585,
        "lon": -117.1773,
        "alt": 5181,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964315,
        "lat": 34.1436,
        "lon": -117.2317,
        "alt": 4876,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964346,
        "lat": 34.1284,
        "lon": -117.2867,
        "alt": 4572,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964377,
        "lat": 34.1132,
        "lon": -117.3413,
        "alt": 3962,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782964408,
        "lat": 34.0984,
        "lon": -117.3962,
        "alt": 3962,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782964440,
        "lat": 34.0849,
        "lon": -117.4521,
        "alt": 3657,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782964449,
        "lat": 34.0811,
        "lon": -117.4673,
        "alt": 3657,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782964466,
        "lat": 34.0737,
        "lon": -117.4964,
        "alt": 3657,
        "hdg": 250,
        "onGround": false
      },
      {
        "t": 1782964470,
        "lat": 34.0718,
        "lon": -117.5027,
        "alt": 3657,
        "hdg": 248,
        "onGround": false
      },
      {
        "t": 1782964480,
        "lat": 34.0661,
        "lon": -117.5187,
        "alt": 3352,
        "hdg": 246,
        "onGround": false
      },
      {
        "t": 1782964534,
        "lat": 34.0374,
        "lon": -117.5989,
        "alt": 3048,
        "hdg": 246,
        "onGround": false
      },
      {
        "t": 1782964582,
        "lat": 34.0124,
        "lon": -117.6668,
        "alt": 3048,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782964586,
        "lat": 34.0107,
        "lon": -117.6723,
        "alt": 3048,
        "hdg": 250,
        "onGround": false
      },
      {
        "t": 1782964589,
        "lat": 34.0095,
        "lon": -117.6768,
        "alt": 3048,
        "hdg": 252,
        "onGround": false
      },
      {
        "t": 1782964593,
        "lat": 34.0081,
        "lon": -117.6823,
        "alt": 2743,
        "hdg": 254,
        "onGround": false
      },
      {
        "t": 1782964594,
        "lat": 34.0077,
        "lon": -117.6843,
        "alt": 2743,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782964598,
        "lat": 34.0067,
        "lon": -117.6895,
        "alt": 2743,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782964602,
        "lat": 34.0056,
        "lon": -117.6961,
        "alt": 2743,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782964613,
        "lat": 34.0038,
        "lon": -117.712,
        "alt": 2743,
        "hdg": 261,
        "onGround": false
      },
      {
        "t": 1782964623,
        "lat": 34.0016,
        "lon": -117.7266,
        "alt": 2743,
        "hdg": 259,
        "onGround": false
      },
      {
        "t": 1782964634,
        "lat": 33.9997,
        "lon": -117.7419,
        "alt": 2743,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782964650,
        "lat": 33.9975,
        "lon": -117.7641,
        "alt": 2438,
        "hdg": 264,
        "onGround": false
      },
      {
        "t": 1782964709,
        "lat": 33.9912,
        "lon": -117.8415,
        "alt": 1828,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782964770,
        "lat": 33.9839,
        "lon": -117.9184,
        "alt": 1828,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782964835,
        "lat": 33.976,
        "lon": -117.9993,
        "alt": 1524,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782964898,
        "lat": 33.9683,
        "lon": -118.077,
        "alt": 1219,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782964952,
        "lat": 33.9617,
        "lon": -118.1428,
        "alt": 914,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782965008,
        "lat": 33.9551,
        "lon": -118.2083,
        "alt": 609,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782965063,
        "lat": 33.9489,
        "lon": -118.2698,
        "alt": 304,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782965130,
        "lat": 33.9427,
        "lon": -118.3307,
        "alt": 0,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782965192,
        "lat": 33.9375,
        "lon": -118.3813,
        "alt": 0,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782998353,
        "lat": 33.9477,
        "lon": -118.4259,
        "alt": 0,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782998368,
        "lat": 33.9462,
        "lon": -118.4403,
        "alt": 304,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782998381,
        "lat": 33.9448,
        "lon": -118.4527,
        "alt": 304,
        "hdg": 262,
        "onGround": false
      },
      {
        "t": 1782998393,
        "lat": 33.9436,
        "lon": -118.4651,
        "alt": 304,
        "hdg": 265,
        "onGround": false
      },
      {
        "t": 1782998409,
        "lat": 33.9429,
        "lon": -118.4831,
        "alt": 609,
        "hdg": 267,
        "onGround": false
      },
      {
        "t": 1782998428,
        "lat": 33.9421,
        "lon": -118.5073,
        "alt": 609,
        "hdg": 266,
        "onGround": false
      },
      {
        "t": 1782998432,
        "lat": 33.9417,
        "lon": -118.5127,
        "alt": 609,
        "hdg": 263,
        "onGround": false
      },
      {
        "t": 1782998434,
        "lat": 33.9415,
        "lon": -118.5149,
        "alt": 609,
        "hdg": 261,
        "onGround": false
      },
      {
        "t": 1782998435,
        "lat": 33.9412,
        "lon": -118.5168,
        "alt": 609,
        "hdg": 260,
        "onGround": false
      },
      {
        "t": 1782998436,
        "lat": 33.941,
        "lon": -118.5182,
        "alt": 609,
        "hdg": 258,
        "onGround": false
      },
      {
        "t": 1782998437,
        "lat": 33.9407,
        "lon": -118.5197,
        "alt": 609,
        "hdg": 257,
        "onGround": false
      },
      {
        "t": 1782998438,
        "lat": 33.9404,
        "lon": -118.5209,
        "alt": 609,
        "hdg": 255,
        "onGround": false
      },
      {
        "t": 1782998439,
        "lat": 33.9402,
        "lon": -118.5217,
        "alt": 609,
        "hdg": 253,
        "onGround": false
      },
      {
        "t": 1782998440,
        "lat": 33.9398,
        "lon": -118.5232,
        "alt": 609,
        "hdg": 251,
        "onGround": false
      },
      {
        "t": 1782998441,
        "lat": 33.9393,
        "lon": -118.5247,
        "alt": 609,
        "hdg": 249,
        "onGround": false
      },
      {
        "t": 1782998442,
        "lat": 33.9389,
        "lon": -118.5259,
        "alt": 609,
        "hdg": 247,
        "onGround": false
      },
      {
        "t": 1782998443,
        "lat": 33.9383,
        "lon": -118.5273,
        "alt": 609,
        "hdg": 244,
        "onGround": false
      },
      {
        "t": 1782998444,
        "lat": 33.9378,
        "lon": -118.5285,
        "alt": 609,
        "hdg": 242,
        "onGround": false
      },
      {
        "t": 1782998445,
        "lat": 33.9372,
        "lon": -118.5298,
        "alt": 609,
        "hdg": 240,
        "onGround": false
      },
      {
        "t": 1782998446,
        "lat": 33.9365,
        "lon": -118.531,
        "alt": 609,
        "hdg": 238,
        "onGround": false
      },
      {
        "t": 1782998447,
        "lat": 33.9358,
        "lon": -118.5323,
        "alt": 609,
        "hdg": 235,
        "onGround": false
      },
      {
        "t": 1782998448,
        "lat": 33.935,
        "lon": -118.5335,
        "alt": 609,
        "hdg": 233,
        "onGround": false
      },
      {
        "t": 1782998449,
        "lat": 33.9343,
        "lon": -118.5346,
        "alt": 609,
        "hdg": 231,
        "onGround": false
      },
      {
        "t": 1782998450,
        "lat": 33.9335,
        "lon": -118.5357,
        "alt": 609,
        "hdg": 229,
        "onGround": false
      },
      {
        "t": 1782998451,
        "lat": 33.9327,
        "lon": -118.5367,
        "alt": 609,
        "hdg": 227,
        "onGround": false
      },
      {
        "t": 1782998452,
        "lat": 33.9318,
        "lon": -118.5377,
        "alt": 609,
        "hdg": 224,
        "onGround": false
      },
      {
        "t": 1782998453,
        "lat": 33.931,
        "lon": -118.5386,
        "alt": 914,
        "hdg": 222,
        "onGround": false
      },
      {
        "t": 1782998454,
        "lat": 33.9302,
        "lon": -118.5394,
        "alt": 914,
        "hdg": 221,
        "onGround": false
      },
      {
        "t": 1782998455,
        "lat": 33.9292,
        "lon": -118.5404,
        "alt": 914,
        "hdg": 219,
        "onGround": false
      },
      {
        "t": 1782998456,
        "lat": 33.9283,
        "lon": -118.5412,
        "alt": 914,
        "hdg": 218,
        "onGround": false
      },
      {
        "t": 1782998458,
        "lat": 33.926,
        "lon": -118.5433,
        "alt": 914,
        "hdg": 216,
        "onGround": false
      },
      {
        "t": 1782998462,
        "lat": 33.9221,
        "lon": -118.5466,
        "alt": 914,
        "hdg": 214,
        "onGround": false
      },
      {
        "t": 1782998471,
        "lat": 33.9129,
        "lon": -118.5539,
        "alt": 914,
        "hdg": 212,
        "onGround": false
      },
      {
        "t": 1782998479,
        "lat": 33.9043,
        "lon": -118.5602,
        "alt": 914,
        "hdg": 210,
        "onGround": false
      },
      {
        "t": 1782998481,
        "lat": 33.9019,
        "lon": -118.5618,
        "alt": 1219,
        "hdg": 208,
        "onGround": false
      },
      {
        "t": 1782998482,
        "lat": 33.9006,
        "lon": -118.5626,
        "alt": 1219,
        "hdg": 206,
        "onGround": false
      },
      {
        "t": 1782998483,
        "lat": 33.8994,
        "lon": -118.5632,
        "alt": 1219,
        "hdg": 205,
        "onGround": false
      },
      {
        "t": 1782998484,
        "lat": 33.8981,
        "lon": -118.5639,
        "alt": 1219,
        "hdg": 203,
        "onGround": false
      },
      {
        "t": 1782998485,
        "lat": 33.8968,
        "lon": -118.5646,
        "alt": 1219,
        "hdg": 201,
        "onGround": false
      },
      {
        "t": 1782998486,
        "lat": 33.8956,
        "lon": -118.5651,
        "alt": 1219,
        "hdg": 199,
        "onGround": false
      },
      {
        "t": 1782998487,
        "lat": 33.8944,
        "lon": -118.5655,
        "alt": 1219,
        "hdg": 198,
        "onGround": false
      },
      {
        "t": 1782998488,
        "lat": 33.8933,
        "lon": -118.5659,
        "alt": 1219,
        "hdg": 196,
        "onGround": false
      },
      {
        "t": 1782998489,
        "lat": 33.8919,
        "lon": -118.5663,
        "alt": 1219,
        "hdg": 194,
        "onGround": false
      },
      {
        "t": 1782998490,
        "lat": 33.8908,
        "lon": -118.5666,
        "alt": 1219,
        "hdg": 192,
        "onGround": false
      },
      {
        "t": 1782998491,
        "lat": 33.8895,
        "lon": -118.5669,
        "alt": 1219,
        "hdg": 191,
        "onGround": false
      },
      {
        "t": 1782998492,
        "lat": 33.8883,
        "lon": -118.5671,
        "alt": 1219,
        "hdg": 189,
        "onGround": false
      },
      {
        "t": 1782998493,
        "lat": 33.8871,
        "lon": -118.5674,
        "alt": 1219,
        "hdg": 188,
        "onGround": false
      },
      {
        "t": 1782998494,
        "lat": 33.8857,
        "lon": -118.5675,
        "alt": 1219,
        "hdg": 186,
        "onGround": false
      },
      {
        "t": 1782998495,
        "lat": 33.8844,
        "lon": -118.5677,
        "alt": 1219,
        "hdg": 185,
        "onGround": false
      },
      {
        "t": 1782998496,
        "lat": 33.8831,
        "lon": -118.5678,
        "alt": 1219,
        "hdg": 183,
        "onGround": false
      },
      {
        "t": 1782998497,
        "lat": 33.8818,
        "lon": -118.5678,
        "alt": 1219,
        "hdg": 181,
        "onGround": false
      },
      {
        "t": 1782998498,
        "lat": 33.8805,
        "lon": -118.5678,
        "alt": 1219,
        "hdg": 180,
        "onGround": false
      },
      {
        "t": 1782998499,
        "lat": 33.8792,
        "lon": -118.5678,
        "alt": 1219,
        "hdg": 178,
        "onGround": false
      },
      {
        "t": 1782998500,
        "lat": 33.8779,
        "lon": -118.5677,
        "alt": 1524,
        "hdg": 177,
        "onGround": false
      },
      {
        "t": 1782998501,
        "lat": 33.8765,
        "lon": -118.5675,
        "alt": 1524,
        "hdg": 175,
        "onGround": false
      },
      {
        "t": 1782998502,
        "lat": 33.8753,
        "lon": -118.5674,
        "alt": 1524,
        "hdg": 174,
        "onGround": false
      },
      {
        "t": 1782998503,
        "lat": 33.8735,
        "lon": -118.5671,
        "alt": 1524,
        "hdg": 172,
        "onGround": false
      },
      {
        "t": 1782998504,
        "lat": 33.8722,
        "lon": -118.5669,
        "alt": 1524,
        "hdg": 171,
        "onGround": false
      },
      {
        "t": 1782998505,
        "lat": 33.871,
        "lon": -118.5666,
        "alt": 1524,
        "hdg": 170,
        "onGround": false
      },
      {
        "t": 1782998507,
        "lat": 33.8685,
        "lon": -118.566,
        "alt": 1524,
        "hdg": 167,
        "onGround": false
      },
      {
        "t": 1782998518,
        "lat": 33.8547,
        "lon": -118.5619,
        "alt": 1828,
        "hdg": 166,
        "onGround": false
      },
      {
        "t": 1782998539,
        "lat": 33.8281,
        "lon": -118.555,
        "alt": 1828,
        "hdg": 168,
        "onGround": false
      },
      {
        "t": 1782998565,
        "lat": 33.7946,
        "lon": -118.5458,
        "alt": 2438,
        "hdg": 167,
        "onGround": false
      },
      {
        "t": 1782998589,
        "lat": 33.7624,
        "lon": -118.5372,
        "alt": 2743,
        "hdg": 168,
        "onGround": false
      },
      {
        "t": 1782998613,
        "lat": 33.7303,
        "lon": -118.5293,
        "alt": 3048,
        "hdg": 167,
        "onGround": false
      },
      {
        "t": 1782998614,
        "lat": 33.7294,
        "lon": -118.529,
        "alt": 3048,
        "hdg": 166,
        "onGround": false
      },
      {
        "t": 1782998616,
        "lat": 33.7264,
        "lon": -118.5281,
        "alt": 3048,
        "hdg": 164,
        "onGround": false
      },
      {
        "t": 1782998617,
        "lat": 33.725,
        "lon": -118.5276,
        "alt": 3048,
        "hdg": 163,
        "onGround": false
      },
      {
        "t": 1782998618,
        "lat": 33.7238,
        "lon": -118.5271,
        "alt": 3048,
        "hdg": 161,
        "onGround": false
      },
      {
        "t": 1782998619,
        "lat": 33.7226,
        "lon": -118.5265,
        "alt": 3048,
        "hdg": 160,
        "onGround": false
      },
      {
        "t": 1782998620,
        "lat": 33.7211,
        "lon": -118.5259,
        "alt": 3048,
        "hdg": 158,
        "onGround": false
      },
      {
        "t": 1782998621,
        "lat": 33.7197,
        "lon": -118.5252,
        "alt": 3048,
        "hdg": 157,
        "onGround": false
      },
      {
        "t": 1782998623,
        "lat": 33.7173,
        "lon": -118.5238,
        "alt": 3048,
        "hdg": 155,
        "onGround": false
      },
      {
        "t": 1782998624,
        "lat": 33.716,
        "lon": -118.5231,
        "alt": 3048,
        "hdg": 153,
        "onGround": false
      },
      {
        "t": 1782998625,
        "lat": 33.7148,
        "lon": -118.5223,
        "alt": 3048,
        "hdg": 152,
        "onGround": false
      },
      {
        "t": 1782998626,
        "lat": 33.7134,
        "lon": -118.5214,
        "alt": 3048,
        "hdg": 151,
        "onGround": false
      },
      {
        "t": 1782998628,
        "lat": 33.7108,
        "lon": -118.5195,
        "alt": 3048,
        "hdg": 148,
        "onGround": false
      },
      {
        "t": 1782998629,
        "lat": 33.7096,
        "lon": -118.5185,
        "alt": 3048,
        "hdg": 147,
        "onGround": false
      },
      {
        "t": 1782998630,
        "lat": 33.709,
        "lon": -118.518,
        "alt": 3048,
        "hdg": 146,
        "onGround": false
      },
      {
        "t": 1782998631,
        "lat": 33.7077,
        "lon": -118.517,
        "alt": 3048,
        "hdg": 144,
        "onGround": false
      },
      {
        "t": 1782998632,
        "lat": 33.7064,
        "lon": -118.5158,
        "alt": 3048,
        "hdg": 143,
        "onGround": false
      },
      {
        "t": 1782998633,
        "lat": 33.7053,
        "lon": -118.5148,
        "alt": 3048,
        "hdg": 141,
        "onGround": false
      },
      {
        "t": 1782998634,
        "lat": 33.7042,
        "lon": -118.5137,
        "alt": 3048,
        "hdg": 140,
        "onGround": false
      },
      {
        "t": 1782998635,
        "lat": 33.7031,
        "lon": -118.5125,
        "alt": 3048,
        "hdg": 138,
        "onGround": false
      },
      {
        "t": 1782998636,
        "lat": 33.7019,
        "lon": -118.5112,
        "alt": 3048,
        "hdg": 137,
        "onGround": false
      },
      {
        "t": 1782998637,
        "lat": 33.7009,
        "lon": -118.51,
        "alt": 3048,
        "hdg": 136,
        "onGround": false
      },
      {
        "t": 1782998638,
        "lat": 33.6998,
        "lon": -118.5088,
        "alt": 3048,
        "hdg": 134,
        "onGround": false
      },
      {
        "t": 1782998639,
        "lat": 33.6987,
        "lon": -118.5073,
        "alt": 3048,
        "hdg": 133,
        "onGround": false
      },
      {
        "t": 1782998640,
        "lat": 33.6978,
        "lon": -118.5061,
        "alt": 3048,
        "hdg": 132,
        "onGround": false
      },
      {
        "t": 1782998641,
        "lat": 33.6967,
        "lon": -118.5046,
        "alt": 3048,
        "hdg": 130,
        "onGround": false
      },
      {
        "t": 1782998642,
        "lat": 33.6956,
        "lon": -118.503,
        "alt": 3048,
        "hdg": 129,
        "onGround": false
      },
      {
        "t": 1782998643,
        "lat": 33.6947,
        "lon": -118.5017,
        "alt": 3048,
        "hdg": 128,
        "onGround": false
      },
      {
        "t": 1782998644,
        "lat": 33.6939,
        "lon": -118.5003,
        "alt": 3048,
        "hdg": 126,
        "onGround": false
      },
      {
        "t": 1782998645,
        "lat": 33.6929,
        "lon": -118.4985,
        "alt": 3048,
        "hdg": 125,
        "onGround": false
      },
      {
        "t": 1782998646,
        "lat": 33.6921,
        "lon": -118.4972,
        "alt": 3048,
        "hdg": 123,
        "onGround": false
      },
      {
        "t": 1782998647,
        "lat": 33.6913,
        "lon": -118.4956,
        "alt": 3048,
        "hdg": 122,
        "onGround": false
      },
      {
        "t": 1782998648,
        "lat": 33.6908,
        "lon": -118.4946,
        "alt": 3048,
        "hdg": 121,
        "onGround": false
      },
      {
        "t": 1782998649,
        "lat": 33.6895,
        "lon": -118.492,
        "alt": 3048,
        "hdg": 119,
        "onGround": false
      },
      {
        "t": 1782998650,
        "lat": 33.6888,
        "lon": -118.4904,
        "alt": 3048,
        "hdg": 118,
        "onGround": false
      },
      {
        "t": 1782998651,
        "lat": 33.6881,
        "lon": -118.4887,
        "alt": 3048,
        "hdg": 116,
        "onGround": false
      },
      {
        "t": 1782998652,
        "lat": 33.6875,
        "lon": -118.4871,
        "alt": 3048,
        "hdg": 115,
        "onGround": false
      },
      {
        "t": 1782998653,
        "lat": 33.6869,
        "lon": -118.4856,
        "alt": 3048,
        "hdg": 114,
        "onGround": false
      },
      {
        "t": 1782998655,
        "lat": 33.6857,
        "lon": -118.4821,
        "alt": 3048,
        "hdg": 112,
        "onGround": false
      },
      {
        "t": 1782998658,
        "lat": 33.6839,
        "lon": -118.4763,
        "alt": 3352,
        "hdg": 110,
        "onGround": false
      },
      {
        "t": 1782998691,
        "lat": 33.6659,
        "lon": -118.4152,
        "alt": 3657,
        "hdg": 109,
        "onGround": false
      },
      {
        "t": 1782998711,
        "lat": 33.6551,
        "lon": -118.3778,
        "alt": 3657,
        "hdg": 108,
        "onGround": false
      },
      {
        "t": 1782998716,
        "lat": 33.6524,
        "lon": -118.3679,
        "alt": 3657,
        "hdg": 106,
        "onGround": false
      },
      {
        "t": 1782998720,
        "lat": 33.6505,
        "lon": -118.3594,
        "alt": 3962,
        "hdg": 104,
        "onGround": false
      },
      {
        "t": 1782998725,
        "lat": 33.6487,
        "lon": -118.35,
        "alt": 3962,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1782998729,
        "lat": 33.6475,
        "lon": -118.3419,
        "alt": 3962,
        "hdg": 99,
        "onGround": false
      },
      {
        "t": 1782998734,
        "lat": 33.6462,
        "lon": -118.3313,
        "alt": 3962,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1782998739,
        "lat": 33.6453,
        "lon": -118.3208,
        "alt": 3962,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1782998744,
        "lat": 33.6448,
        "lon": -118.3106,
        "alt": 3962,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1782998750,
        "lat": 33.6446,
        "lon": -118.2983,
        "alt": 3962,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782998781,
        "lat": 33.6449,
        "lon": -118.2327,
        "alt": 3962,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782998786,
        "lat": 33.6454,
        "lon": -118.2214,
        "alt": 4572,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782998788,
        "lat": 33.6457,
        "lon": -118.2177,
        "alt": 4572,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1782998824,
        "lat": 33.6543,
        "lon": -118.1378,
        "alt": 4876,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782998857,
        "lat": 33.6629,
        "lon": -118.0631,
        "alt": 5181,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782998896,
        "lat": 33.6728,
        "lon": -117.974,
        "alt": 5486,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782998940,
        "lat": 33.684,
        "lon": -117.8696,
        "alt": 5791,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782998978,
        "lat": 33.6941,
        "lon": -117.7771,
        "alt": 6096,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782999017,
        "lat": 33.7045,
        "lon": -117.681,
        "alt": 6400,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782999055,
        "lat": 33.7147,
        "lon": -117.5853,
        "alt": 6705,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782999096,
        "lat": 33.7257,
        "lon": -117.4819,
        "alt": 7010,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782999143,
        "lat": 33.7383,
        "lon": -117.361,
        "alt": 7315,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1782999185,
        "lat": 33.7496,
        "lon": -117.2497,
        "alt": 7315,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1782999192,
        "lat": 33.7506,
        "lon": -117.231,
        "alt": 7620,
        "hdg": 87,
        "onGround": false
      },
      {
        "t": 1782999197,
        "lat": 33.7509,
        "lon": -117.2182,
        "alt": 7620,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1782999244,
        "lat": 33.7486,
        "lon": -117.0905,
        "alt": 7924,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782999299,
        "lat": 33.7455,
        "lon": -116.9397,
        "alt": 8229,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782999355,
        "lat": 33.742,
        "lon": -116.7824,
        "alt": 8229,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782999411,
        "lat": 33.7381,
        "lon": -116.6242,
        "alt": 8839,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782999459,
        "lat": 33.7347,
        "lon": -116.4878,
        "alt": 9144,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1782999464,
        "lat": 33.7345,
        "lon": -116.4742,
        "alt": 9144,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1782999470,
        "lat": 33.7348,
        "lon": -116.4567,
        "alt": 9144,
        "hdg": 87,
        "onGround": false
      },
      {
        "t": 1782999476,
        "lat": 33.7357,
        "lon": -116.4404,
        "alt": 9144,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1782999482,
        "lat": 33.7372,
        "lon": -116.4225,
        "alt": 9144,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1782999489,
        "lat": 33.7395,
        "lon": -116.4032,
        "alt": 9144,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1782999496,
        "lat": 33.7423,
        "lon": -116.3851,
        "alt": 9144,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1782999503,
        "lat": 33.7459,
        "lon": -116.3654,
        "alt": 9448,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1782999560,
        "lat": 33.7792,
        "lon": -116.2109,
        "alt": 9753,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782999623,
        "lat": 33.815,
        "lon": -116.0418,
        "alt": 10058,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1782999989,
        "lat": 34.0255,
        "lon": -115.0524,
        "alt": 10363,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1783000070,
        "lat": 34.0716,
        "lon": -114.8299,
        "alt": 10668,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1783000121,
        "lat": 34.1004,
        "lon": -114.6907,
        "alt": 10668,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1783000462,
        "lat": 34.3512,
        "lon": -113.7816,
        "alt": 10668,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1783000468,
        "lat": 34.355,
        "lon": -113.7662,
        "alt": 10668,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1783001217,
        "lat": 34.7114,
        "lon": -111.6877,
        "alt": 10668,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1783001221,
        "lat": 34.7139,
        "lon": -111.6759,
        "alt": 10668,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1783001225,
        "lat": 34.7163,
        "lon": -111.6664,
        "alt": 10668,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1783001229,
        "lat": 34.7195,
        "lon": -111.6551,
        "alt": 10668,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1783001233,
        "lat": 34.7228,
        "lon": -111.6445,
        "alt": 10668,
        "hdg": 67,
        "onGround": false
      },
      {
        "t": 1783001237,
        "lat": 34.7269,
        "lon": -111.6333,
        "alt": 10668,
        "hdg": 65,
        "onGround": false
      },
      {
        "t": 1783001241,
        "lat": 34.7309,
        "lon": -111.6232,
        "alt": 10668,
        "hdg": 63,
        "onGround": false
      },
      {
        "t": 1783001245,
        "lat": 34.7354,
        "lon": -111.6132,
        "alt": 10668,
        "hdg": 61,
        "onGround": false
      },
      {
        "t": 1783001249,
        "lat": 34.74,
        "lon": -111.6038,
        "alt": 10668,
        "hdg": 58,
        "onGround": false
      },
      {
        "t": 1783001253,
        "lat": 34.7447,
        "lon": -111.5948,
        "alt": 10668,
        "hdg": 56,
        "onGround": false
      },
      {
        "t": 1783001258,
        "lat": 34.7514,
        "lon": -111.5832,
        "alt": 10668,
        "hdg": 54,
        "onGround": false
      },
      {
        "t": 1783001667,
        "lat": 35.3375,
        "lon": -110.6707,
        "alt": 10668,
        "hdg": 52,
        "onGround": false
      },
      {
        "t": 1783001678,
        "lat": 35.3524,
        "lon": -110.6446,
        "alt": 10668,
        "hdg": 57,
        "onGround": false
      },
      {
        "t": 1783001680,
        "lat": 35.354,
        "lon": -110.6414,
        "alt": 10668,
        "hdg": 59,
        "onGround": false
      },
      {
        "t": 1783001684,
        "lat": 35.3589,
        "lon": -110.6307,
        "alt": 10668,
        "hdg": 61,
        "onGround": false
      },
      {
        "t": 1783001687,
        "lat": 35.3615,
        "lon": -110.6247,
        "alt": 10668,
        "hdg": 63,
        "onGround": false
      },
      {
        "t": 1783001694,
        "lat": 35.3683,
        "lon": -110.6068,
        "alt": 10668,
        "hdg": 65,
        "onGround": false
      },
      {
        "t": 1783001697,
        "lat": 35.3708,
        "lon": -110.5994,
        "alt": 10668,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1783001699,
        "lat": 35.3733,
        "lon": -110.5911,
        "alt": 10668,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1783001703,
        "lat": 35.3757,
        "lon": -110.5822,
        "alt": 10668,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1783001709,
        "lat": 35.3797,
        "lon": -110.5652,
        "alt": 10668,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1783001712,
        "lat": 35.3816,
        "lon": -110.5555,
        "alt": 10668,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1783001716,
        "lat": 35.3829,
        "lon": -110.5471,
        "alt": 10668,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1783001720,
        "lat": 35.3844,
        "lon": -110.5358,
        "alt": 10668,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1783003085,
        "lat": 35.774,
        "lon": -106.6804,
        "alt": 10668,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1783004467,
        "lat": 36.0393,
        "lon": -102.7789,
        "alt": 10668,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1783005881,
        "lat": 36.1795,
        "lon": -98.746,
        "alt": 10363,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1783005883,
        "lat": 36.1797,
        "lon": -98.7393,
        "alt": 10668,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1783006841,
        "lat": 36.198,
        "lon": -96.1081,
        "alt": 10668,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1783006997,
        "lat": 36.1926,
        "lon": -95.6835,
        "alt": 10668,
        "hdg": 92,
        "onGround": false
      },
      {
        "t": 1783008392,
        "lat": 35.9984,
        "lon": -91.9791,
        "alt": 10668,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1783009564,
        "lat": 35.7104,
        "lon": -88.9036,
        "alt": 10363,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1783009584,
        "lat": 35.7052,
        "lon": -88.8533,
        "alt": 10363,
        "hdg": 95,
        "onGround": false
      },
      {
        "t": 1783009590,
        "lat": 35.7042,
        "lon": -88.8375,
        "alt": 10363,
        "hdg": 93,
        "onGround": false
      },
      {
        "t": 1783009598,
        "lat": 35.7035,
        "lon": -88.8158,
        "alt": 10058,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1783009600,
        "lat": 35.7034,
        "lon": -88.8111,
        "alt": 10058,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1783009607,
        "lat": 35.7036,
        "lon": -88.7933,
        "alt": 10058,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1783009614,
        "lat": 35.7044,
        "lon": -88.7748,
        "alt": 10058,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1783009621,
        "lat": 35.7057,
        "lon": -88.7571,
        "alt": 9753,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009642,
        "lat": 35.7104,
        "lon": -88.7026,
        "alt": 9448,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009664,
        "lat": 35.7152,
        "lon": -88.6466,
        "alt": 9144,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009684,
        "lat": 35.7198,
        "lon": -88.595,
        "alt": 8839,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009714,
        "lat": 35.7269,
        "lon": -88.5167,
        "alt": 8229,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009745,
        "lat": 35.734,
        "lon": -88.4362,
        "alt": 8229,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009765,
        "lat": 35.7386,
        "lon": -88.3854,
        "alt": 7924,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009789,
        "lat": 35.7442,
        "lon": -88.3234,
        "alt": 7620,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783009813,
        "lat": 35.7495,
        "lon": -88.2622,
        "alt": 7315,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1783009838,
        "lat": 35.7546,
        "lon": -88.2,
        "alt": 7010,
        "hdg": 84,
        "onGround": false
      },
      {
        "t": 1783009846,
        "lat": 35.756,
        "lon": -88.1792,
        "alt": 7010,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1783009863,
        "lat": 35.7566,
        "lon": -88.1395,
        "alt": 6705,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783009889,
        "lat": 35.7574,
        "lon": -88.0765,
        "alt": 6400,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783009914,
        "lat": 35.7582,
        "lon": -88.0151,
        "alt": 6096,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783009933,
        "lat": 35.7588,
        "lon": -87.9704,
        "alt": 5791,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783009957,
        "lat": 35.7596,
        "lon": -87.9136,
        "alt": 5486,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783009985,
        "lat": 35.7604,
        "lon": -87.8482,
        "alt": 5181,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783010006,
        "lat": 35.7612,
        "lon": -87.8006,
        "alt": 4876,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1783010030,
        "lat": 35.7618,
        "lon": -87.7453,
        "alt": 4572,
        "hdg": 89,
        "onGround": false
      },
      {
        "t": 1783010042,
        "lat": 35.7621,
        "lon": -87.7174,
        "alt": 4572,
        "hdg": 88,
        "onGround": false
      },
      {
        "t": 1783010046,
        "lat": 35.7625,
        "lon": -87.7104,
        "alt": 4572,
        "hdg": 86,
        "onGround": false
      },
      {
        "t": 1783010047,
        "lat": 35.7627,
        "lon": -87.7063,
        "alt": 4572,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1783010051,
        "lat": 35.7634,
        "lon": -87.6978,
        "alt": 4572,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783010056,
        "lat": 35.7647,
        "lon": -87.6866,
        "alt": 3962,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1783010058,
        "lat": 35.7653,
        "lon": -87.6821,
        "alt": 3962,
        "hdg": 79,
        "onGround": false
      },
      {
        "t": 1783010063,
        "lat": 35.7669,
        "lon": -87.6724,
        "alt": 3962,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1783010067,
        "lat": 35.7688,
        "lon": -87.6627,
        "alt": 3962,
        "hdg": 76,
        "onGround": false
      },
      {
        "t": 1783010069,
        "lat": 35.77,
        "lon": -87.6575,
        "alt": 3962,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1783010073,
        "lat": 35.7719,
        "lon": -87.6497,
        "alt": 3962,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1783010076,
        "lat": 35.7738,
        "lon": -87.6427,
        "alt": 3962,
        "hdg": 70,
        "onGround": false
      },
      {
        "t": 1783010105,
        "lat": 35.7924,
        "lon": -87.5824,
        "alt": 3657,
        "hdg": 69,
        "onGround": false
      },
      {
        "t": 1783010136,
        "lat": 35.8119,
        "lon": -87.5188,
        "alt": 3352,
        "hdg": 69,
        "onGround": false
      },
      {
        "t": 1783010156,
        "lat": 35.8236,
        "lon": -87.4814,
        "alt": 3352,
        "hdg": 68,
        "onGround": false
      },
      {
        "t": 1783010160,
        "lat": 35.8262,
        "lon": -87.474,
        "alt": 3352,
        "hdg": 66,
        "onGround": false
      },
      {
        "t": 1783010180,
        "lat": 35.84,
        "lon": -87.439,
        "alt": 3048,
        "hdg": 64,
        "onGround": false
      },
      {
        "t": 1783010201,
        "lat": 35.8548,
        "lon": -87.401,
        "alt": 2743,
        "hdg": 64,
        "onGround": false
      },
      {
        "t": 1783010221,
        "lat": 35.8685,
        "lon": -87.3662,
        "alt": 2743,
        "hdg": 65,
        "onGround": false
      },
      {
        "t": 1783010224,
        "lat": 35.8705,
        "lon": -87.3608,
        "alt": 2743,
        "hdg": 67,
        "onGround": false
      },
      {
        "t": 1783010226,
        "lat": 35.8715,
        "lon": -87.3573,
        "alt": 2743,
        "hdg": 69,
        "onGround": false
      },
      {
        "t": 1783010227,
        "lat": 35.872,
        "lon": -87.3556,
        "alt": 2743,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1783010228,
        "lat": 35.8724,
        "lon": -87.3538,
        "alt": 2743,
        "hdg": 72,
        "onGround": false
      },
      {
        "t": 1783010229,
        "lat": 35.8727,
        "lon": -87.3523,
        "alt": 2743,
        "hdg": 74,
        "onGround": false
      },
      {
        "t": 1783010230,
        "lat": 35.8731,
        "lon": -87.3504,
        "alt": 2743,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1783010232,
        "lat": 35.8737,
        "lon": -87.3472,
        "alt": 2743,
        "hdg": 77,
        "onGround": false
      },
      {
        "t": 1783010233,
        "lat": 35.8739,
        "lon": -87.3455,
        "alt": 2743,
        "hdg": 80,
        "onGround": false
      },
      {
        "t": 1783010234,
        "lat": 35.8741,
        "lon": -87.3435,
        "alt": 2743,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1783010235,
        "lat": 35.8743,
        "lon": -87.3418,
        "alt": 2743,
        "hdg": 83,
        "onGround": false
      },
      {
        "t": 1783010238,
        "lat": 35.8746,
        "lon": -87.3368,
        "alt": 2743,
        "hdg": 87,
        "onGround": false
      },
      {
        "t": 1783010240,
        "lat": 35.8746,
        "lon": -87.3333,
        "alt": 2743,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1783010245,
        "lat": 35.8741,
        "lon": -87.3252,
        "alt": 2743,
        "hdg": 90,
        "onGround": false
      },
      {
        "t": 1783010250,
        "lat": 35.8731,
        "lon": -87.3177,
        "alt": 2743,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1783010254,
        "lat": 35.872,
        "lon": -87.3108,
        "alt": 2743,
        "hdg": 97,
        "onGround": false
      },
      {
        "t": 1783010255,
        "lat": 35.8717,
        "lon": -87.3094,
        "alt": 2743,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1783010293,
        "lat": 35.8624,
        "lon": -87.2494,
        "alt": 2438,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1783010332,
        "lat": 35.8524,
        "lon": -87.1889,
        "alt": 2438,
        "hdg": 101,
        "onGround": false
      },
      {
        "t": 1783010336,
        "lat": 35.8517,
        "lon": -87.1836,
        "alt": 1828,
        "hdg": 99,
        "onGround": false
      },
      {
        "t": 1783010339,
        "lat": 35.8513,
        "lon": -87.1779,
        "alt": 1828,
        "hdg": 94,
        "onGround": false
      },
      {
        "t": 1783010341,
        "lat": 35.8513,
        "lon": -87.1747,
        "alt": 1828,
        "hdg": 91,
        "onGround": false
      },
      {
        "t": 1783010343,
        "lat": 35.8515,
        "lon": -87.1724,
        "alt": 1828,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1783010346,
        "lat": 35.8519,
        "lon": -87.1671,
        "alt": 1828,
        "hdg": 85,
        "onGround": false
      },
      {
        "t": 1783010349,
        "lat": 35.8524,
        "lon": -87.1627,
        "alt": 1828,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1783010378,
        "lat": 35.8578,
        "lon": -87.1188,
        "alt": 1828,
        "hdg": 81,
        "onGround": false
      },
      {
        "t": 1783010416,
        "lat": 35.8644,
        "lon": -87.0609,
        "alt": 1524,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1783010457,
        "lat": 35.8714,
        "lon": -86.9975,
        "alt": 1219,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1783010529,
        "lat": 35.8838,
        "lon": -86.8873,
        "alt": 914,
        "hdg": 82,
        "onGround": false
      },
      {
        "t": 1783010540,
        "lat": 35.8858,
        "lon": -86.8704,
        "alt": 914,
        "hdg": 80,
        "onGround": false
      },
      {
        "t": 1783010543,
        "lat": 35.8866,
        "lon": -86.8655,
        "alt": 914,
        "hdg": 78,
        "onGround": false
      },
      {
        "t": 1783010544,
        "lat": 35.8868,
        "lon": -86.8647,
        "alt": 914,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1783010545,
        "lat": 35.8872,
        "lon": -86.8629,
        "alt": 914,
        "hdg": 75,
        "onGround": false
      },
      {
        "t": 1783010546,
        "lat": 35.8875,
        "lon": -86.8618,
        "alt": 914,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1783010547,
        "lat": 35.8881,
        "lon": -86.86,
        "alt": 914,
        "hdg": 71,
        "onGround": false
      },
      {
        "t": 1783010548,
        "lat": 35.8886,
        "lon": -86.8586,
        "alt": 914,
        "hdg": 67,
        "onGround": false
      },
      {
        "t": 1783010549,
        "lat": 35.8891,
        "lon": -86.8572,
        "alt": 914,
        "hdg": 67,
        "onGround": false
      },
      {
        "t": 1783010550,
        "lat": 35.8896,
        "lon": -86.8559,
        "alt": 914,
        "hdg": 63,
        "onGround": false
      },
      {
        "t": 1783010552,
        "lat": 35.8909,
        "lon": -86.8532,
        "alt": 914,
        "hdg": 63,
        "onGround": false
      },
      {
        "t": 1783010553,
        "lat": 35.8915,
        "lon": -86.8519,
        "alt": 914,
        "hdg": 57,
        "onGround": false
      },
      {
        "t": 1783010554,
        "lat": 35.8922,
        "lon": -86.8508,
        "alt": 914,
        "hdg": 55,
        "onGround": false
      },
      {
        "t": 1783010555,
        "lat": 35.8925,
        "lon": -86.8503,
        "alt": 914,
        "hdg": 53,
        "onGround": false
      },
      {
        "t": 1783010556,
        "lat": 35.8938,
        "lon": -86.8482,
        "alt": 914,
        "hdg": 51,
        "onGround": false
      },
      {
        "t": 1783010558,
        "lat": 35.8953,
        "lon": -86.846,
        "alt": 914,
        "hdg": 49,
        "onGround": false
      },
      {
        "t": 1783010563,
        "lat": 35.8989,
        "lon": -86.8412,
        "alt": 914,
        "hdg": 46,
        "onGround": false
      },
      {
        "t": 1783010632,
        "lat": 35.9545,
        "lon": -86.7688,
        "alt": 914,
        "hdg": 46,
        "onGround": false
      },
      {
        "t": 1783010657,
        "lat": 35.9738,
        "lon": -86.7441,
        "alt": 914,
        "hdg": 44,
        "onGround": false
      },
      {
        "t": 1783010658,
        "lat": 35.975,
        "lon": -86.7428,
        "alt": 914,
        "hdg": 40,
        "onGround": false
      },
      {
        "t": 1783010660,
        "lat": 35.9765,
        "lon": -86.7414,
        "alt": 914,
        "hdg": 40,
        "onGround": false
      },
      {
        "t": 1783010661,
        "lat": 35.9769,
        "lon": -86.741,
        "alt": 914,
        "hdg": 36,
        "onGround": false
      },
      {
        "t": 1783010662,
        "lat": 35.9776,
        "lon": -86.7404,
        "alt": 914,
        "hdg": 36,
        "onGround": false
      },
      {
        "t": 1783010666,
        "lat": 35.9816,
        "lon": -86.7373,
        "alt": 609,
        "hdg": 30,
        "onGround": false
      },
      {
        "t": 1783010668,
        "lat": 35.9831,
        "lon": -86.7364,
        "alt": 609,
        "hdg": 27,
        "onGround": false
      },
      {
        "t": 1783010672,
        "lat": 35.9869,
        "lon": -86.7341,
        "alt": 609,
        "hdg": 23,
        "onGround": false
      },
      {
        "t": 1783010675,
        "lat": 35.9897,
        "lon": -86.7329,
        "alt": 609,
        "hdg": 23,
        "onGround": false
      },
      {
        "t": 1783010677,
        "lat": 35.9912,
        "lon": -86.7323,
        "alt": 609,
        "hdg": 17,
        "onGround": false
      },
      {
        "t": 1783010688,
        "lat": 36.0022,
        "lon": -86.7284,
        "alt": 609,
        "hdg": 15,
        "onGround": false
      },
      {
        "t": 1783010710,
        "lat": 36.0221,
        "lon": -86.7204,
        "alt": 304,
        "hdg": 18,
        "onGround": false
      },
      {
        "t": 1783010780,
        "lat": 36.0757,
        "lon": -86.699,
        "alt": 0,
        "hdg": 17,
        "onGround": false
      },
      {
        "t": 1783010786,
        "lat": 36.0799,
        "lon": -86.6974,
        "alt": 0,
        "hdg": 17,
        "onGround": false
      }
    ]
  }
];

export const BUNDLED_DAY = BUNDLED_DAYS[0];
export const BUNDLED_DATE = BUNDLED_DAY.date;
