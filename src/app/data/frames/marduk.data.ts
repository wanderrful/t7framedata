import { CharacterFrameData } from "../framedata.interface";

export const Marduk: CharacterFrameData[] = [
  {
    "command": "1",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "1, 2",
    "hitLevel": "h, h",
    "damage": "7, 12",
    "startupFrames": "",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "1, 2, 3+4",
    "hitLevel": "h, h, (special)7, 12",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "-3",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "1, 2, 3+4, 3+4",
    "hitLevel": "h, h (special)",
    "damage": "7, 12",
    "startupFrames": "",
    "blockFrames": "-2",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "1, 2, 3",
    "hitLevel": "h, h, m",
    "damage": "7, 12, 12",
    "startupFrames": "",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "1, 2, 3, 1+2",
    "hitLevel": "h, h, m, h",
    "damage": "7, 12, 12, 28",
    "startupFrames": "",
    "blockFrames": "0s",
    "hitFrames": "+4s",
    "counterHitFrames": "+4s",
    "notes": ""
  },
  {
    "command": "1, 2, f+1",
    "hitLevel": "h, h, h",
    "damage": "7, 12, 21",
    "startupFrames": "",
    "blockFrames": "+4",
    "hitFrames": "+6",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1, d+2",
    "hitLevel": "h, m",
    "damage": "7, 13",
    "startupFrames": "",
    "blockFrames": "-9",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "2",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "10",
    "blockFrames": "0",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "2, 1",
    "hitLevel": "h, h",
    "damage": "10, 12",
    "startupFrames": "",
    "blockFrames": "+3",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "2, d+1+2",
    "hitLevel": "h, m",
    "damage": "10, 22",
    "startupFrames": "",
    "blockFrames": "-12",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "h",
    "damage": "28",
    "startupFrames": "17",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "16",
    "startupFrames": "13",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "1+2",
    "hitLevel": "m",
    "damage": "0",
    "startupFrames": "15",
    "blockFrames": "-9",
    "hitFrames": "+3",
    "counterHitFrames": "+16",
    "notes": ""
  },
  {
    "command": "f+2",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "16",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+2, 1",
    "hitLevel": "h, h",
    "damage": "20, 25",
    "startupFrames": "",
    "blockFrames": "-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f+2, d+1",
    "hitLevel": "h, m",
    "damage": "20, 17",
    "startupFrames": "",
    "blockFrames": "-13s",
    "hitFrames": "+2s",
    "counterHitFrames": "+2s",
    "notes": ""
  },
  {
    "command": "f+2, d+1, 2",
    "hitLevel": "h, m, m",
    "damage": "20, 17, 16",
    "startupFrames": "",
    "blockFrames": "-15",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "23",
    "blockFrames": "-8",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "f+3, 2",
    "hitLevel": "m, m",
    "damage": "13, 20",
    "startupFrames": "",
    "blockFrames": "-11",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "19",
    "blockFrames": "8s",
    "hitFrames": "+2s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+2",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "15 pc8",
    "blockFrames": "-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3+4",
    "hitLevel": "h!",
    "damage": "30",
    "startupFrames": "32",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3+4, 3+4",
    "hitLevel": "(special)",
    "damage": "",
    "startupFrames": "total 45",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f+1+4",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "21",
    "blockFrames": "-18",
    "hitFrames": "+9g",
    "counterHitFrames": "+9g",
    "notes": ""
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "15",
    "blockFrames": "-13",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "15",
    "blockFrames": "-7",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/f+2, 1",
    "hitLevel": "m, m",
    "damage": "16, 21",
    "startupFrames": "",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "17",
    "blockFrames": "-10",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "d/f+3, 1",
    "hitLevel": "m, h",
    "damage": "13, 7",
    "startupFrames": "",
    "blockFrames": "+2",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2",
    "hitLevel": "m, h, h",
    "damage": "13, 7, 10",
    "startupFrames": "",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2, 3+4",
    "hitLevel": "m, h, h (special)",
    "damage": "13, 7, 10",
    "startupFrames": "",
    "blockFrames": "-3",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2, 3+4, 3+4",
    "hitLevel": "m, h, h (special)",
    "damage": "13, 7, 10",
    "startupFrames": "",
    "blockFrames": "-2",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2, 3",
    "hitLevel": "m, h, h, m",
    "damage": "13, 7, 10, 12",
    "startupFrames": "",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2, 3, 1+2",
    "hitLevel": "m, h, h, m, h",
    "damage": "13, 7, 10, 12",
    "startupFrames": "",
    "blockFrames": "0",
    "hitFrames": "+4s",
    "counterHitFrames": "+4s",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, 2, f+1",
    "hitLevel": "m, h, h, h,",
    "damage": "13, 7, 10, 12, 28",
    "startupFrames": "",
    "blockFrames": "+4",
    "hitFrames": "+6",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+3, 1, d+2",
    "hitLevel": "m, h, m",
    "damage": "13, 7, 13",
    "startupFrames": "",
    "blockFrames": "-9",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "d/f+3, 1+2",
    "hitLevel": "m, h",
    "damage": "13, 28",
    "startupFrames": "",
    "blockFrames": "0s",
    "hitFrames": "+4s",
    "counterHitFrames": "+4s",
    "notes": ""
  },
  {
    "command": "d/f+3, d/f+1",
    "hitLevel": "m, m",
    "damage": "13, 10",
    "startupFrames": "",
    "blockFrames": "-12",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/f+3, d/f+1, 2",
    "hitLevel": "m, m, h",
    "damage": "13, 10, 20",
    "startupFrames": "",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+3, d/f+1, 2 (hold)",
    "hitLevel": "m, m, h",
    "damage": "13, 10, 28",
    "startupFrames": "",
    "blockFrames": "+13G (?)",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "13",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "d/f+4, 2",
    "hitLevel": "m, h",
    "damage": "13, 25",
    "startupFrames": "",
    "blockFrames": "-5",
    "hitFrames": "+12k",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/f+1+2",
    "hitLevel": "m (TC)",
    "damage": "23",
    "startupFrames": "17",
    "blockFrames": "-11",
    "hitFrames": "+3s",
    "counterHitFrames": "+3s",
    "notes": ""
  },
  {
    "command": "d+1",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "18",
    "blockFrames": "0s",
    "hitFrames": "+5s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+2",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "16",
    "blockFrames": "-7s",
    "hitFrames": "+7s",
    "counterHitFrames": "+7s",
    "notes": ""
  },
  {
    "command": "d+2, 4",
    "hitLevel": "m, m",
    "damage": "15, 21",
    "startupFrames": "",
    "blockFrames": "-9",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "d+3",
    "hitLevel": "l",
    "damage": "18",
    "startupFrames": "16",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l (TC)",
    "damage": "16",
    "startupFrames": "14",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d+1+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "19",
    "blockFrames": "-12",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/b+1",
    "hitLevel": "sm (TC)",
    "damage": "5",
    "startupFrames": "10",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "16",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/b+3",
    "hitLevel": "l",
    "damage": "10",
    "startupFrames": "18",
    "blockFrames": "-12",
    "hitFrames": "-4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/b+3, 1",
    "hitLevel": "l, h",
    "damage": "10, 16",
    "startupFrames": "",
    "blockFrames": "-6",
    "hitFrames": "+8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+3, 1, 1",
    "hitLevel": "l, h, m",
    "damage": "10, 16, 23",
    "startupFrames": "",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/b+3, 1, 1, 3+4",
    "hitLevel": "l, h (special)",
    "damage": "10, 16",
    "startupFrames": "",
    "blockFrames": "-20",
    "hitFrames": "-6",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+3, 4",
    "hitLevel": "l, m",
    "damage": "10, 16",
    "startupFrames": "",
    "blockFrames": "-13",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "d/b+3, 4, 1+2",
    "hitLevel": "l, m (throw)",
    "damage": "10, 12 (10)",
    "startupFrames": "",
    "blockFrames": "mid throw",
    "hitFrames": "mid throw",
    "counterHitFrames": "mid throw",
    "notes": ""
  },
  {
    "command": "d/b+4",
    "hitLevel": "l (throw)",
    "damage": "12(,10)",
    "startupFrames": "23",
    "blockFrames": "-26",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "d/b+1+2",
    "hitLevel": "m",
    "damage": "23",
    "startupFrames": "26",
    "blockFrames": "-22",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "21",
    "blockFrames": "-8s",
    "hitFrames": "+2s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1, 2",
    "hitLevel": "m, m",
    "damage": "10, 15",
    "startupFrames": "",
    "blockFrames": "-14s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "22",
    "blockFrames": "-9",
    "hitFrames": "+1",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "b+3",
    "hitLevel": "m",
    "damage": "26",
    "startupFrames": "21",
    "blockFrames": "0",
    "hitFrames": "+8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "14",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+3+4",
    "hitLevel": "h",
    "damage": "30",
    "startupFrames": "18",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "b+2+3",
    "hitLevel": "m! (throw)",
    "damage": "70",
    "startupFrames": "80",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "b,b to cancel"
  },
  {
    "command": "b+2+3, 1+2",
    "hitLevel": "m (throw)",
    "damage": "12(10)",
    "startupFrames": "100",
    "blockFrames": "mid throw",
    "hitFrames": "mid throw",
    "counterHitFrames": "mid throw",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+1",
    "hitLevel": "m (TJ)",
    "damage": "12",
    "startupFrames": "18",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+2",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "15",
    "blockFrames": "-12",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+3",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "20 js12",
    "blockFrames": "-2",
    "hitFrames": "KND",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "23 js9",
    "blockFrames": "-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u or u/f+4",
    "hitLevel": "m (TJ)",
    "damage": "18",
    "startupFrames": "23 js9",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+1+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "22",
    "blockFrames": "-6s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+1+2, 3+4",
    "hitLevel": "m (special)",
    "damage": "21",
    "startupFrames": "",
    "blockFrames": "-7s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+1+2, 3+4, 3+4",
    "hitLevel": "m (special)",
    "damage": "21",
    "startupFrames": "",
    "blockFrames": "-6s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+1+2",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "17",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+3+4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "31 js6",
    "blockFrames": "-3s",
    "hitFrames": "+7s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f, N, 4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "23 js9",
    "blockFrames": "-11",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "f, F+2",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "11",
    "blockFrames": "-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "19",
    "blockFrames": "-7",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "f, F+3, 2",
    "hitLevel": "m, m",
    "damage": "18, 26",
    "startupFrames": "",
    "blockFrames": "-14",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "f, F+4",
    "hitLevel": "m",
    "damage": "26",
    "startupFrames": "18",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin, Homing"
  },
  {
    "command": "b, f+1+2",
    "hitLevel": "m, m",
    "damage": "14, 16",
    "startupFrames": "15",
    "blockFrames": "-12",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "qcf+1",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "18",
    "blockFrames": "-10",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "qcf+1, 2",
    "hitLevel": "m, m",
    "damage": "21, 24",
    "startupFrames": "",
    "blockFrames": "-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+1, 2*",
    "hitLevel": "m, m",
    "damage": "21, 40",
    "startupFrames": "",
    "blockFrames": "+23g",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+2",
    "hitLevel": "l (throw)",
    "damage": "20(,35)",
    "startupFrames": "24",
    "blockFrames": "-12",
    "hitFrames": "+5",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "f, f, f+3",
    "hitLevel": "m",
    "damage": "30",
    "startupFrames": "32",
    "blockFrames": "+6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+1",
    "hitLevel": "sm (TC)",
    "damage": "5",
    "startupFrames": "10",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "FC+2",
    "hitLevel": "sm (TC)",
    "damage": "8",
    "startupFrames": "11",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "FC+3",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "16",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "FC+4",
    "hitLevel": "l",
    "damage": "10",
    "startupFrames": "12",
    "blockFrames": "-15",
    "hitFrames": "-4",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "FC+1+2",
    "hitLevel": "m (throw)",
    "damage": "25(,15)",
    "startupFrames": "22",
    "blockFrames": "-4",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "11",
    "blockFrames": "-7",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "WS+1, 3+4",
    "hitLevel": "m (special)",
    "damage": "14",
    "startupFrames": "",
    "blockFrames": "-7",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "WS+1, 3+4, 3+4",
    "hitLevel": "m (special)",
    "damage": "14",
    "startupFrames": "",
    "blockFrames": "-8",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "WS+1, 2",
    "hitLevel": "m, h",
    "damage": "14, 18",
    "startupFrames": "",
    "blockFrames": "-7",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "19",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "WS+3",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "18",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "13",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+1+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "10",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "FC+d/f+2",
    "hitLevel": "h",
    "damage": "28",
    "startupFrames": "20",
    "blockFrames": "-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+d/f+4",
    "hitLevel": "l",
    "damage": "19",
    "startupFrames": "21",
    "blockFrames": "-26",
    "hitFrames": "+8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+2",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "21",
    "blockFrames": "-3",
    "hitFrames": "0s",
    "counterHitFrames": "0s",
    "notes": ""
  },
  {
    "command": "SS+2, 3+4",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "",
    "blockFrames": "+2",
    "hitFrames": "+5s",
    "counterHitFrames": "+5s",
    "notes": ""
  },
  {
    "command": "SS+2, 3+4, 3+4",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "",
    "blockFrames": "+1",
    "hitFrames": "+4s",
    "counterHitFrames": "+4s",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "21",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+1+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "29",
    "blockFrames": "+1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "(opponent grounded) d/b+4",
    "hitLevel": "l",
    "damage": "23",
    "startupFrames": "19",
    "blockFrames": "-14",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "(grounded face down) 2",
    "hitLevel": "m",
    "damage": "23",
    "startupFrames": "20",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "(grounded face down) d+2",
    "hitLevel": "l (throw)",
    "damage": "18(,10)",
    "startupFrames": "17",
    "blockFrames": "-24",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "(back to wall) b, b, u/b",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "36",
    "blockFrames": "0s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT 1 or 2",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "8",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "BT 3 or 4",
    "hitLevel": "h",
    "damage": "18",
    "startupFrames": "10",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT d+1 or d+2",
    "hitLevel": "sm",
    "damage": "10",
    "startupFrames": "10",
    "blockFrames": "-2",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "BT d+3 or d+4",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "10",
    "blockFrames": "-11",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "3+4",
    "hitLevel": "(VTS) TC",
    "damage": "",
    "startupFrames": "cs7",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "d/f+3+4",
    "hitLevel": "(VTS)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "d/b+3+4",
    "hitLevel": "(VTS)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 3+4",
    "hitLevel": "(cancel)",
    "damage": "",
    "startupFrames": "total 1 frame",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS u or d",
    "hitLevel": "(special)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS f+1",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "13",
    "blockFrames": "-4",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "VTS f+1, 2",
    "hitLevel": "m, m",
    "damage": "16, 20",
    "startupFrames": "",
    "blockFrames": "-13s",
    "hitFrames": "+2s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "VTS f+1, 4",
    "hitLevel": "m, h",
    "damage": "16, 26",
    "startupFrames": "",
    "blockFrames": "-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "VTS f+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "17 pc8",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall boune, Power crush"
  },
  {
    "command": "VTS d+1+2",
    "hitLevel": "l, m",
    "damage": "20, 20",
    "startupFrames": "17",
    "blockFrames": "-39",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1+3",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "12",
    "blockFrames": "break 1 or 2",
    "hitFrames": "-6",
    "counterHitFrames": "f+1+3 15 frames",
    "notes": ""
  },
  {
    "command": "2+4",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "12",
    "blockFrames": "break 1 or 2",
    "hitFrames": "-6",
    "counterHitFrames": "f+2+4 15 frames",
    "notes": ""
  },
  {
    "command": "Left side throw",
    "hitLevel": "h",
    "damage": "45",
    "startupFrames": "12",
    "blockFrames": "break 1",
    "hitFrames": "-3",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Right side trhow",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "12",
    "blockFrames": "break 2",
    "hitFrames": "-3",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Opponent BT 1+3",
    "hitLevel": "h",
    "damage": "60",
    "startupFrames": "12",
    "blockFrames": "no break",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Opponent BT 2+4",
    "hitLevel": "h",
    "damage": "60",
    "startupFrames": "12",
    "blockFrames": "no break",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, F+1+2",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "12",
    "blockFrames": "break 1+2",
    "hitFrames": "0",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+1+3",
    "hitLevel": "h",
    "damage": "30",
    "startupFrames": "12",
    "blockFrames": "break 1",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+1+3, 1+2",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+2+4",
    "hitLevel": "h",
    "damage": "30",
    "startupFrames": "12",
    "blockFrames": "break 2",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+2+4, 1+2",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcb+1+2",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "11",
    "blockFrames": "break 1+2",
    "hitFrames": "-6",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, hcf+1",
    "hitLevel": "h",
    "damage": "50",
    "startupFrames": "11",
    "blockFrames": "break 1",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 1+2 (close)",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "34",
    "blockFrames": "break 1+2",
    "hitFrames": "-4",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 1+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "30",
    "blockFrames": "break 1 or 1+2",
    "hitFrames": "-8",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 1+2 (far)",
    "hitLevel": "sm",
    "damage": "10",
    "startupFrames": "50",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 1+2, u or d",
    "hitLevel": "(cancel)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 1+3",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "12",
    "blockFrames": "break 1",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "VTS 2+4",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "12",
    "blockFrames": "break 2",
    "hitFrames": "-2",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 1",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "18",
    "blockFrames": "break 2",
    "hitFrames": "-5",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 1+3",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "17",
    "blockFrames": "break 2",
    "hitFrames": "-9",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 2",
    "hitLevel": "h",
    "damage": "35",
    "startupFrames": "17",
    "blockFrames": "break 1",
    "hitFrames": "-5",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 2+4",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "18",
    "blockFrames": "break 1",
    "hitFrames": "-9",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 1+2",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "28",
    "blockFrames": "break 1+2",
    "hitFrames": "-9",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Mount 3+4",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "28",
    "blockFrames": "break 1+2",
    "hitFrames": "-9",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(opponent grounded) d/b+1+3",
    "hitLevel": "",
    "damage": "18",
    "startupFrames": "",
    "blockFrames": "break 1",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(opponent groudned) d/b+2+4",
    "hitLevel": "",
    "damage": "18",
    "startupFrames": "",
    "blockFrames": "break 2",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(opponent in air) 1+3",
    "hitLevel": "h",
    "damage": "29",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(opponent in air) 2+4",
    "hitLevel": "h",
    "damage": "26",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(opponent in air) f, F+2",
    "hitLevel": "h",
    "damage": "60",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "w! 1+3 or 2+4",
    "hitLevel": "h",
    "damage": "60",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "In rage b+1+2",
    "hitLevel": "m (throw)",
    "damage": "55",
    "startupFrames": "20",
    "blockFrames": "-22",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": "Rage art"
  },
  {
    "command": "In rage f+2+3",
    "hitLevel": "m (throw)",
    "damage": "35(,12)",
    "startupFrames": "21",
    "blockFrames": "+7g",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": "Rage drive"
  },
  {
    "command": "In rage f+2+3 (far)",
    "hitLevel": "sm",
    "damage": "10",
    "startupFrames": "45",
    "blockFrames": "-10",
    "hitFrames": "+9s",
    "counterHitFrames": "+9s",
    "notes": "Rage drive"
  }
];