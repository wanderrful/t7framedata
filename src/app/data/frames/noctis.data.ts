import { CharacterFrameData } from "../framedata.interface";

export const Noctis: CharacterFrameData[] = [
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
    "hitLevel": "h,h",
    "damage": "7,8",
    "startupFrames": "10",
    "blockFrames": "-2",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": "nc from 1st hit"
  },
  {
    "command": "1, 2, 2",
    "hitLevel": "h,h,h",
    "damage": "7,8,12",
    "startupFrames": "10",
    "blockFrames": "-11",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": "nc from 1st hit"
  },
  {
    "command": "1, 2, 1+2",
    "hitLevel": "h,h,m",
    "damage": "7,8,23",
    "startupFrames": "10",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "1, 2, 3 or 4",
    "hitLevel": "h,h, (Special)",
    "damage": "7,8",
    "startupFrames": "js",
    "blockFrames": "-26",
    "hitFrames": "-18",
    "counterHitFrames": "-18",
    "notes": ""
  },
  {
    "command": "2",
    "hitLevel": "m",
    "damage": "9",
    "startupFrames": "15",
    "blockFrames": "-12",
    "hitFrames": "-6",
    "counterHitFrames": "-6",
    "notes": ""
  },
  {
    "command": "2, 2",
    "hitLevel": "m,m",
    "damage": "9,13",
    "startupFrames": "15",
    "blockFrames": "-9",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": "nc from 1st hit"
  },
  {
    "command": "2, 2, 2",
    "hitLevel": "m,m,h",
    "damage": "9,13,7",
    "startupFrames": "15",
    "blockFrames": "-8",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "2, 2, 2, 2",
    "hitLevel": "m,m,h,h",
    "damage": "9,13,7,7",
    "startupFrames": "15",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": "nc from 3rd hit"
  },
  {
    "command": "2, 2, 2, 2, 2",
    "hitLevel": "m,m,h,y,m",
    "damage": "9,13,7,7,15",
    "startupFrames": "15",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "nc from 3rd hit"
  },
  {
    "command": "2, 2, f+2",
    "hitLevel": "m,m,m",
    "damage": "9,13,23",
    "startupFrames": "15",
    "blockFrames": "-14",
    "hitFrames": "+5",
    "counterHitFrames": "Tail Spin",
    "notes": "Tail spin"
  },
  {
    "command": "2, 2, b+2",
    "hitLevel": "m, m, m(throw)",
    "damage": "9,9,5,(20)",
    "startupFrames": "15 js",
    "blockFrames": "-11",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "14",
    "blockFrames": "-7",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "12",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "4,2",
    "hitLevel": "h,m",
    "damage": "15,15",
    "startupFrames": "12",
    "blockFrames": "-14",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "1+2",
    "hitLevel": "h,m",
    "damage": "17,24",
    "startupFrames": "18",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "Tail Spin",
    "notes": "Homing, Tail Spin"
  },
  {
    "command": "1+2~B",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "18",
    "blockFrames": "-9",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": "Homing"
  },
  {
    "command": "f+2",
    "hitLevel": "m",
    "damage": "8(,25)",
    "startupFrames": "20 js",
    "blockFrames": "-9",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "16",
    "blockFrames": "-9",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "f+3, 2",
    "hitLevel": "m,m",
    "damage": "14,5(,20)",
    "startupFrames": "16",
    "blockFrames": "-11",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "17",
    "blockFrames": "-8",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "f+4, 2",
    "hitLevel": "m,m",
    "damage": "13,21",
    "startupFrames": "17",
    "blockFrames": "-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f+1+2",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "16",
    "blockFrames": "-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+4",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "23",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power Crush"
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "13",
    "blockFrames": "-1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "d/f+1, 4",
    "hitLevel": "m,h",
    "damage": "10,20",
    "startupFrames": "13 js",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail Spion"
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "15",
    "blockFrames": "-20",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "9",
    "startupFrames": "16",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "d/f+3, 1",
    "hitLevel": "m,h",
    "damage": "9,7",
    "startupFrames": "16",
    "blockFrames": "-10",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "14",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/f+4, 2",
    "hitLevel": "m,h",
    "damage": "12,17",
    "startupFrames": "14",
    "blockFrames": "-2",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "d/f+4, 2, 4",
    "hitLevel": "m,h,h",
    "damage": "12,17,20",
    "startupFrames": "14 js",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail Spin"
  },
  {
    "command": "d/f+4, 2, 2",
    "hitLevel": "m,h,m",
    "damage": "12,17,21",
    "startupFrames": "14 js",
    "blockFrames": "-8",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/f+1+2",
    "hitLevel": "m",
    "damage": "27",
    "startupFrames": "25",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail Spin"
  },
  {
    "command": "d+1",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrames": "17",
    "blockFrames": "-3",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d+2",
    "hitLevel": "l",
    "damage": "15",
    "startupFrames": "20",
    "blockFrames": "-15",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "d+2, 2",
    "hitLevel": "l,h",
    "damage": "15,23",
    "startupFrames": "20",
    "blockFrames": "-9",
    "hitFrames": "+10",
    "counterHitFrames": "KND",
    "notes": "Tail Spin"
  },
  {
    "command": "d or d/b+3",
    "hitLevel": "l",
    "damage": "13 cs",
    "startupFrames": "16",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l",
    "damage": "9",
    "startupFrames": "19",
    "blockFrames": "-31",
    "hitFrames": "-9",
    "counterHitFrames": "-9",
    "notes": ""
  },
  {
    "command": "d+4, 1",
    "hitLevel": "l,h",
    "damage": "9(13),20",
    "startupFrames": "19",
    "blockFrames": "-12",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d+4 ,1, 1+2",
    "hitLevel": "l,h,m",
    "damage": "9(13),20,25(28)",
    "startupFrames": "19",
    "blockFrames": "-18s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "15",
    "blockFrames": "-6",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "d/b+1, 1+2",
    "hitLevel": "m,m,m",
    "damage": "10,7,10",
    "startupFrames": "15",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/b+1~F",
    "hitLevel": "m",
    "damage": "7",
    "startupFrames": "15",
    "blockFrames": "-6",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "l",
    "damage": "20",
    "startupFrames": "24",
    "blockFrames": "-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+4",
    "hitLevel": "l",
    "damage": "9",
    "startupFrames": "17",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "d/b+1+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "25",
    "blockFrames": "-16",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "d/b+1+2*",
    "hitLevel": "m",
    "damage": "28",
    "startupFrames": "46",
    "blockFrames": "+2",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "12",
    "blockFrames": "-11",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "b+1, 2",
    "hitLevel": "h,h",
    "damage": "10,21",
    "startupFrames": "12",
    "blockFrames": "-9",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "15",
    "blockFrames": "-9",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "b+2 when hit 1+2",
    "hitLevel": "m, throw",
    "damage": "13,7,17",
    "startupFrames": "15",
    "blockFrames": "~",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "b+3",
    "hitLevel": "h",
    "damage": "14",
    "startupFrames": "14",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "-1",
    "notes": ""
  },
  {
    "command": "b+3, 1",
    "hitLevel": "h,m",
    "damage": "14,23",
    "startupFrames": "14",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+3~B",
    "hitLevel": "h, (special)",
    "damage": "14",
    "startupFrames": "14",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "18",
    "blockFrames": "-7",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "b+4, 1+2",
    "hitLevel": "h,m",
    "damage": "17,27",
    "startupFrames": "20",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "b+1+4",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "26",
    "blockFrames": "-9",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": "KND with Punch parry"
  },
  {
    "command": "b+2+3",
    "hitLevel": "m!",
    "damage": "50",
    "startupFrames": "69",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+1",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "14",
    "blockFrames": "-4",
    "hitFrames": "+8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "30 js9~",
    "blockFrames": "-8",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+3",
    "hitLevel": "m(,m)",
    "damage": "11(,23)",
    "startupFrames": "17 js9~",
    "blockFrames": "-13",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+3, u",
    "hitLevel": "m(,m)",
    "damage": "11(,23)",
    "startupFrames": "17 js9~",
    "blockFrames": "-13",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f+4",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "19 js9~",
    "blockFrames": "-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail Spin"
  },
  {
    "command": "u/b,b",
    "hitLevel": "special",
    "damage": "js10~",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u/b or u or u/f",
    "hitLevel": "special",
    "damage": "js9~",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "During jump 1",
    "hitLevel": "m",
    "damage": "7",
    "startupFrames": "9",
    "blockFrames": "-23",
    "hitFrames": "-16",
    "counterHitFrames": "-16",
    "notes": ""
  },
  {
    "command": "During jump 2",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "10",
    "blockFrames": "-22",
    "hitFrames": "-15",
    "counterHitFrames": "-15",
    "notes": ""
  },
  {
    "command": "(When hit in air) 2, 2",
    "hitLevel": "m,m",
    "damage": "14,14",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "(When hit in air) 2, 2, 2",
    "hitLevel": "m,m,m",
    "damage": "14,14,23",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": "Tail spin"
  },
  {
    "command": "(During jump) 3",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "10",
    "blockFrames": "-22",
    "hitFrames": "-15",
    "counterHitFrames": "-15",
    "notes": ""
  },
  {
    "command": "(During jump) 4",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "12",
    "blockFrames": "-21",
    "hitFrames": "-14",
    "counterHitFrames": "-14",
    "notes": ""
  },
  {
    "command": "(During jump) 1+2",
    "hitLevel": "m",
    "damage": "27",
    "startupFrames": "41 js9~",
    "blockFrames": "+5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f+4",
    "hitLevel": "m",
    "damage": "15(,14,21)",
    "startupFrames": "19",
    "blockFrames": "-14",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "f, f+1+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "15",
    "blockFrames": "-9",
    "hitFrames": "+10",
    "counterHitFrames": "KND",
    "notes": "Tail Spin, Homing"
  },
  {
    "command": "f, f+3+4",
    "hitLevel": "h",
    "damage": "50",
    "startupFrames": "30 js14~",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+1+2 or wr+1+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "23 js3~",
    "blockFrames": "+11",
    "hitFrames": "JG",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "FC+1",
    "hitLevel": "sm",
    "damage": "5",
    "startupFrames": "10 cs",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "FC+2",
    "hitLevel": "sm",
    "damage": "8",
    "startupFrames": "11 cs",
    "blockFrames": "-9",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "FC+3",
    "hitLevel": "l",
    "damage": "12 cs",
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
    "startupFrames": "12 cs",
    "blockFrames": "-15",
    "hitFrames": "-4",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "13",
    "blockFrames": "-8",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "WS+1, 2",
    "hitLevel": "m,m",
    "damage": "10,23",
    "startupFrames": "13",
    "blockFrames": "-13",
    "hitFrames": "+2",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "ws+2",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "15",
    "blockFrames": "-9",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "ws+2, 2",
    "hitLevel": "m,m",
    "damage": "13,23",
    "startupFrames": "15",
    "blockFrames": "-14",
    "hitFrames": "+5",
    "counterHitFrames": "Tail Spin",
    "notes": "Tail spin"
  },
  {
    "command": "ws+3",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "14",
    "blockFrames": "-7",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "ws+3,2",
    "hitLevel": "m,m",
    "damage": "12,5(,20)",
    "startupFrames": "14",
    "blockFrames": "-11",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": ""
  },
  {
    "command": "ws+4",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "11",
    "blockFrames": "-6",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "FC+d/f+1",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "16",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+d/f+2",
    "hitLevel": "l",
    "damage": "17",
    "startupFrames": "20 cs",
    "blockFrames": "-13",
    "hitFrames": "+4s",
    "counterHitFrames": "+13g",
    "notes": "Homing"
  },
  {
    "command": "1+2+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "1+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "SS+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "18",
    "blockFrames": "0",
    "hitFrames": "5s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT 1",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "8",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "BT 2",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "20",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
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
    "command": "f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "cs",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f+3+4, 1",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "18",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush, Wall bounce"
  },
  {
    "command": "f+3+4, 3+4",
    "hitLevel": "l",
    "damage": "17",
    "startupFrames": "20 cs",
    "blockFrames": "-20",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "in rage d+1+2",
    "hitLevel": "m",
    "damage": "55",
    "startupFrames": "20 pc",
    "blockFrames": "-32",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": "rage art"
  },
  {
    "command": "in rage f+2+3",
    "hitLevel": "m",
    "damage": "10,30",
    "startupFrames": "18",
    "blockFrames": "+2",
    "hitFrames": "throw",
    "counterHitFrames": "throw",
    "notes": "rage drive"
  }
];