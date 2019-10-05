import { CharacterFrameData } from "../framedata.interface";

export const Paul: CharacterFrameData[] = [
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
    "damage": "7,12",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "1, 2, 3",
    "hitLevel": "h, h, m",
    "damage": "7,12,7",
    "startupFrames": "10",
    "blockFrames": "-25~-24",
    "hitFrames": "-14~-13",
    "counterHitFrames": "-14~-13",
    "notes": ""
  },
  {
    "command": "1, 4",
    "hitLevel": "h, l (TC)",
    "damage": "7,8",
    "startupFrames": "s cs10~",
    "blockFrames": "-11",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "2",
    "hitLevel": "h",
    "damage": "10(12)",
    "startupFrames": "10",
    "blockFrames": "0",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "2, 3",
    "hitLevel": "h, h",
    "damage": "12,21",
    "startupFrames": "10",
    "blockFrames": "-12~-11",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "2, d+3",
    "hitLevel": "h, l (TC)",
    "damage": "10,11",
    "startupFrames": "s cs10~",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "15~16",
    "blockFrames": "-7~-6",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "3, 2",
    "hitLevel": "m, h",
    "damage": "14,17",
    "startupFrames": "15~16",
    "blockFrames": "-3",
    "hitFrames": "+7",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "12",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f+2",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "12",
    "blockFrames": "0",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "f+2, 3",
    "hitLevel": "h, h",
    "damage": "10,16",
    "startupFrames": "12",
    "blockFrames": "-11~-10",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "f+2, 3, 1",
    "hitLevel": "h, h, m",
    "damage": "10,16,22",
    "startupFrames": "12",
    "blockFrames": "-12",
    "hitFrames": "KND",
    "counterHitFrames": "+19",
    "notes": ""
  },
  {
    "command": "f+1+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "20~21",
    "blockFrames": "+3~+4s",
    "hitFrames": "+8~+9s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+4",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "21~23",
    "blockFrames": "-14~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "14",
    "blockFrames": "-2",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/f+1, 1",
    "hitLevel": "m, h",
    "damage": "13,9",
    "startupFrames": "14",
    "blockFrames": "-5~-4",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+8~+9",
    "notes": ""
  },
  {
    "command": "d/f+1, 1, 2",
    "hitLevel": "m, h, m",
    "damage": "13,9,22",
    "startupFrames": "14",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+1, b",
    "hitLevel": "m, (Special)",
    "damage": "13",
    "startupFrames": "14",
    "blockFrames": "+3",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "15~16",
    "blockFrames": "-8~-7",
    "hitFrames": "Launch (JG?) (+3a)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "16",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "d/f+3, 4",
    "hitLevel": "m, m",
    "damage": "14,17",
    "startupFrames": "16",
    "blockFrames": "-10~-9",
    "hitFrames": "+6~+7",
    "counterHitFrames": "FS (+6~+7)",
    "notes": ""
  },
  {
    "command": "d/f+3, 4*",
    "hitLevel": "m, m",
    "damage": "14,25",
    "startupFrames": "16",
    "blockFrames": "-6~-5",
    "hitFrames": "FS (+6~+7)",
    "counterHitFrames": "FS (+6~+7)",
    "notes": ""
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "19~20",
    "blockFrames": "-1~0",
    "hitFrames": "+9~+10",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "14~15",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+3~+4s",
    "notes": ""
  },
  {
    "command": "d+1, D",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "14~15s",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+3~+4s",
    "notes": ""
  },
  {
    "command": "d+1, 2",
    "hitLevel": "m, m",
    "damage": "16,26",
    "startupFrames": "14~15",
    "blockFrames": "-17",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1, 2 (Hold)",
    "hitLevel": "m, m",
    "damage": "16,39",
    "startupFrames": "14~15",
    "blockFrames": "+20g",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1, 4",
    "hitLevel": "m, l",
    "damage": "16,15",
    "startupFrames": "14~15",
    "blockFrames": "-31",
    "hitFrames": "-17",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1, 4, 2",
    "hitLevel": "m, l, m",
    "damage": "16,15,21",
    "startupFrames": "14~15",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4 (Close)",
    "hitLevel": "l",
    "damage": "13",
    "startupFrames": "15",
    "blockFrames": "-31",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l",
    "damage": "9",
    "startupFrames": "15",
    "blockFrames": "-31",
    "hitFrames": "-17",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4, 2",
    "hitLevel": "l, m",
    "damage": "9,23",
    "startupFrames": "15",
    "blockFrames": "-18",
    "hitFrames": "-9",
    "counterHitFrames": "-9",
    "notes": ""
  },
  {
    "command": "d+4:2:1+2",
    "hitLevel": "l, m, m",
    "damage": "9,23,22",
    "startupFrames": "15",
    "blockFrames": "-17~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4, 2:1+2",
    "hitLevel": "l, m, m",
    "damage": "9,23,25",
    "startupFrames": "15",
    "blockFrames": "-17~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1+2",
    "hitLevel": "m?",
    "damage": "30",
    "startupFrames": "12~13",
    "blockFrames": "-16~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "m?",
    "damage": "21",
    "startupFrames": "19~20",
    "blockFrames": "-11~-10",
    "hitFrames": "KND",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "12~13",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": "Homing"
  },
  {
    "command": "b+1, 2",
    "hitLevel": "h, h",
    "damage": "12,21",
    "startupFrames": "12~13",
    "blockFrames": "-5~-4",
    "hitFrames": "+8k~+9k",
    "counterHitFrames": "+8k~+9k",
    "notes": "Tail spin"
  },
  {
    "command": "b+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "18",
    "blockFrames": "-5s",
    "hitFrames": "+4s",
    "counterHitFrames": "+4s",
    "notes": ""
  },
  {
    "command": "b+2, 1",
    "hitLevel": "m, m",
    "damage": "22,22",
    "startupFrames": "18",
    "blockFrames": "-12",
    "hitFrames": "0s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2, 1*",
    "hitLevel": "m, m",
    "damage": "22,35",
    "startupFrames": "18",
    "blockFrames": "+8~+9s",
    "hitFrames": "+8~+9s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+3",
    "hitLevel": "h",
    "damage": "16",
    "startupFrames": "14~15",
    "blockFrames": "-6~-5",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "l",
    "damage": "14",
    "startupFrames": "20~21",
    "blockFrames": "-13~-12",
    "hitFrames": "+3~+4",
    "counterHitFrames": "+3~+4",
    "notes": ""
  },
  {
    "command": "b+1+2",
    "hitLevel": "h",
    "damage": "28",
    "startupFrames": "24 pc8~23",
    "blockFrames": "0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush"
  },
  {
    "command": "u/b+2",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "20~21",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": "Homing"
  },
  {
    "command": "u/f+2",
    "hitLevel": "m (TJ)",
    "damage": "35",
    "startupFrames": "34a js8",
    "blockFrames": "+9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "u/b+3",
    "hitLevel": "m (TJ)",
    "damage": "12",
    "startupFrames": "15~16 js10~",
    "blockFrames": "-16~-15",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u+3",
    "hitLevel": "m (TJ)",
    "damage": "13",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-16~-15",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/f+3",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-16~-15",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+3, 4",
    "hitLevel": "m (TJ), m (TJ)",
    "damage": "14,20",
    "startupFrames": "js1~",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/f+4",
    "hitLevel": "m (TJ)",
    "damage": "13",
    "startupFrames": "15~17 js9~",
    "blockFrames": "-13~-11",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f, F+2",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "15~17 (16~)",
    "blockFrames": "-17~-15",
    "hitFrames": "-7~-5",
    "counterHitFrames": "-7~-5",
    "notes": ""
  },
  {
    "command": "f, F+2, 1",
    "hitLevel": "m, m",
    "damage": "14,20",
    "startupFrames": "15~17 (16~)",
    "blockFrames": "-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+2, 1, B (Cancel)",
    "hitLevel": "m, (Special)",
    "damage": "14",
    "startupFrames": "15~17 (16~)",
    "blockFrames": "-21~-19",
    "hitFrames": "-11~-9",
    "counterHitFrames": "-11~-9",
    "notes": ""
  },
  {
    "command": "f, F+2, 2",
    "hitLevel": "m, l (TC)",
    "damage": "14,21",
    "startupFrames": "cs15~",
    "blockFrames": "-19~-17",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "f, F+2, 2, B (Cancel)",
    "hitLevel": "m, (Special) (TC)",
    "damage": "14",
    "startupFrames": "15~s",
    "blockFrames": "-28~-26",
    "hitFrames": "-18~-16",
    "counterHitFrames": "-18~-16",
    "notes": ""
  },
  {
    "command": "f, F+2:1",
    "hitLevel": "m, h",
    "damage": "14,24",
    "startupFrames": "15~",
    "blockFrames": "-4",
    "hitFrames": "KMeD",
    "counterHitFrames": "KMeD",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "15~16a (16~) js9~",
    "blockFrames": "-17~-16",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f, F+3, 4",
    "hitLevel": "m (TJ), m (TJ)",
    "damage": "14,15",
    "startupFrames": "js1~",
    "blockFrames": "-16~-15",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f, F+3, 4, 4",
    "hitLevel": "m (TJ), m (TJ), h",
    "damage": "14,15,25",
    "startupFrames": "1~",
    "blockFrames": "-5~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3, 4, f or d/f+4",
    "hitLevel": "m (TJ), m (TJ), m",
    "damage": "14,15,18",
    "startupFrames": "1~",
    "blockFrames": "-14~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3, 4, d or d/b+4",
    "hitLevel": "m (TJ), m (TJ), l (TC)",
    "damage": "14,15,15",
    "startupFrames": "s cs20~",
    "blockFrames": "-17~-16",
    "hitFrames": "-6~-5",
    "counterHitFrames": "-6~-5",
    "notes": ""
  },
  {
    "command": "f, F+4",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "23~34as (27~) js13~",
    "blockFrames": "-5~+6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b, f+1",
    "hitLevel": "h",
    "damage": "22",
    "startupFrames": "28~31 (28~)",
    "blockFrames": "-6~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b, B+1+2",
    "hitLevel": "!",
    "damage": "80",
    "startupFrames": "63~64 (64~)",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "15~16",
    "blockFrames": "-14~-13",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "WS+3",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "13~14",
    "blockFrames": "-8~-7",
    "hitFrames": "+3~+4",
    "counterHitFrames": "+3~+4",
    "notes": ""
  },
  {
    "command": "WS+3, 2",
    "hitLevel": "m, h",
    "damage": "16,21",
    "startupFrames": "13~14",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": "Tail spin"
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "11~12",
    "blockFrames": "-6~-5",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "FC+d/f+2",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "14~16",
    "blockFrames": "-17~-16",
    "hitFrames": "-7~-6",
    "counterHitFrames": "-7~-6",
    "notes": ""
  },
  {
    "command": "FC+d/f+1+2",
    "hitLevel": "l (TC)",
    "damage": "20",
    "startupFrames": "32~33s cs1~",
    "blockFrames": "-12~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "D(Hundred and sixty frames)",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "32~33 1~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "D(Hundred and sixty frames)n, u+3+4 (On the way up)",
    "hitLevel": "m (TJ), m",
    "damage": "48",
    "startupFrames": "13~18d js9~",
    "blockFrames": "-49~-44",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "D(Hundred and sixty frames)n, u+3+4 (On the way down)",
    "hitLevel": "m (TJ), m",
    "damage": "48",
    "startupFrames": "46~56d js1~",
    "blockFrames": "-21~-11",
    "hitFrames": "-10~0s",
    "counterHitFrames": "-10~0s",
    "notes": ""
  },
  {
    "command": "SS+1",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "20(30~)",
    "blockFrames": "+8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+3",
    "hitLevel": "l",
    "damage": "18",
    "startupFrames": "19(29~)",
    "blockFrames": "-12",
    "hitFrames": "+4",
    "counterHitFrames": "+12",
    "notes": ""
  },
  {
    "command": "Opponent Down, d+2",
    "hitLevel": "l(On grounded opponent)",
    "damage": "16",
    "startupFrames": "18",
    "blockFrames": "-12",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "qcf",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "18",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+1",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "16~17 (18~)",
    "blockFrames": "-4~-3",
    "hitFrames": "YKU",
    "counterHitFrames": "YKU",
    "notes": ""
  },
  {
    "command": "qcf+2 (Close)",
    "hitLevel": "m",
    "damage": "54",
    "startupFrames": "13~14 (15~)",
    "blockFrames": "-17~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+2",
    "hitLevel": "m",
    "damage": "36",
    "startupFrames": "13~14 (15~)",
    "blockFrames": "-17~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+3",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "18~19 (20~) cs6~",
    "blockFrames": "-14~-13",
    "hitFrames": "0~+1",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+3+4",
    "hitLevel": "m (TJ)",
    "damage": "40",
    "startupFrames": "19~20a (21~) js18~",
    "blockFrames": "-9~-8",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "qcf, or d, d/f, n",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "19~20 (21~) 18~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcb",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "19~20 (21~) 18~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcb+1",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "21~22 (23~)",
    "blockFrames": "0~+1s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcb+2",
    "hitLevel": "m",
    "damage": "21(31)",
    "startupFrames": "15(17~)",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcb+3",
    "hitLevel": "l (TC)",
    "damage": "14",
    "startupFrames": "18~19s (20~) cs1~",
    "blockFrames": "-21~-20",
    "hitFrames": "-9~-8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcb+3, 2",
    "hitLevel": "l, m",
    "damage": "14,20",
    "startupFrames": "18~19 (20~) 1~",
    "blockFrames": "-10~-9",
    "hitFrames": "+6~+7",
    "counterHitFrames": "+6~+7",
    "notes": ""
  },
  {
    "command": "qcb+3, 2, 1",
    "hitLevel": "l, m, h",
    "damage": "14,20,25",
    "startupFrames": "18~19 (20~) 1~",
    "blockFrames": "-10~-9",
    "hitFrames": "KMeD",
    "counterHitFrames": "KMeD",
    "notes": ""
  },
  {
    "command": "qcb+3, 2, 3",
    "hitLevel": "l, m, m",
    "damage": "14,20,22",
    "startupFrames": "18~19 (20~) 1~",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "qcb+4",
    "hitLevel": "h",
    "damage": "28",
    "startupFrames": "15~16 (17~)",
    "blockFrames": "+1~+2",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "qcb+1+2",
    "hitLevel": "m?",
    "damage": "22",
    "startupFrames": "18~19 (20~)",
    "blockFrames": "-14~-13",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "f+1",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "h",
    "damage": "30",
    "startupFrames": "16",
    "blockFrames": "-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "12",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "11s cs4~",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "d+3",
    "hitLevel": "l (TC)",
    "damage": "12",
    "startupFrames": "16s cs4~",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "d/b+1",
    "hitLevel": "Sm (TC)",
    "damage": "5",
    "startupFrames": "10s cs4~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/b+3",
    "hitLevel": "l (TC)",
    "damage": "12",
    "startupFrames": "15~17s cs5~",
    "blockFrames": "-18~-16",
    "hitFrames": "-4~-2",
    "counterHitFrames": "-4~-2",
    "notes": ""
  },
  {
    "command": "d/b+4",
    "hitLevel": "l (TC)",
    "damage": "7",
    "startupFrames": "12s cs4~",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+1",
    "hitLevel": "m (TJ)",
    "damage": "12",
    "startupFrames": "18 js9~",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "u+2",
    "hitLevel": "h",
    "damage": "22",
    "startupFrames": "15~16",
    "blockFrames": "-12~-11",
    "hitFrames": "+9~10g",
    "counterHitFrames": "+9~10g",
    "notes": ""
  },
  {
    "command": "u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "15~17 js9~",
    "blockFrames": "-19~-17",
    "hitFrames": "-8~-6",
    "counterHitFrames": "-8~-6",
    "notes": ""
  },
  {
    "command": "u+4",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "15~17 js9~",
    "blockFrames": "-13~-11",
    "hitFrames": "KND",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/f, n+4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "23(29,35)",
    "blockFrames": "-11(-13)",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "10~11",
    "blockFrames": "-4~-3",
    "hitFrames": "+7~+8",
    "counterHitFrames": "+7~+8",
    "notes": ""
  },
  {
    "command": "FC+1",
    "hitLevel": "Sm (TC)",
    "damage": "5",
    "startupFrames": "10s cs1~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "11s cs1~",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "FC+3",
    "hitLevel": "l (TC)",
    "damage": "12",
    "startupFrames": "16s cs1~",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "FC+4",
    "hitLevel": "l (TC)",
    "damage": "10",
    "startupFrames": "12s cs1~",
    "blockFrames": "-15",
    "hitFrames": "-4",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "SS+2",
    "hitLevel": "h",
    "damage": "10(12)",
    "startupFrames": "10(11~)",
    "blockFrames": "0",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "12(13~)",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "SS+1+2",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10(11~)",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "SS+3+4",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "15~16 (16~)",
    "blockFrames": "-7~-6",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
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
    "damage": "25",
    "startupFrames": "10",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT d+1 or 2",
    "hitLevel": "Sm",
    "damage": "10",
    "startupFrames": "10s cs1~",
    "blockFrames": "-2",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "BT d+3 or 4",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "10s cs1~",
    "blockFrames": "-11",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "in rage 1+2",
    "hitLevel": "m",
    "damage": "55(10,45)",
    "startupFrames": "20 pc8~17",
    "blockFrames": "-22",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art"
  },
  {
    "command": "in rage 1+2, b",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "20",
    "blockFrames": "-22",
    "hitFrames": "TSU",
    "counterHitFrames": "TSU",
    "notes": "Rage art"
  },
  {
    "command": "in rage qcf+1+2",
    "hitLevel": "m",
    "damage": "40(60)",
    "startupFrames": "12(14~)",
    "blockFrames": "+3(wl+9)",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage drive"
  }
];