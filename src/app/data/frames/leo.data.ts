import { CharacterFrameData } from "../framedata.interface";

export const Leo: CharacterFrameData[] = [
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
    "damage": "7,10",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "1, 2, B",
    "hitLevel": "h, h, (KNK)",
    "damage": "7,10",
    "startupFrames": "10",
    "blockFrames": "-10",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "1, 2, 1",
    "hitLevel": "h, h, h",
    "damage": "7,10,16",
    "startupFrames": "10",
    "blockFrames": "-5~-4",
    "hitFrames": "+6~+7",
    "counterHitFrames": "+9~+10",
    "notes": ""
  },
  {
    "command": "1, 2, 1, 1",
    "hitLevel": "h, h, h, m",
    "damage": "7,10,16,21",
    "startupFrames": "10",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1, 2, 1, 4",
    "hitLevel": "h, h, h, h",
    "damage": "7,10,16,30",
    "startupFrames": "10",
    "blockFrames": "-6~-4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1, 2, 4",
    "hitLevel": "h, h, l",
    "damage": "7,10,15",
    "startupFrames": "10",
    "blockFrames": "-13",
    "hitFrames": "+3",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1, 4",
    "hitLevel": "h, h",
    "damage": "7,17",
    "startupFrames": "10",
    "blockFrames": "-4",
    "hitFrames": "+5",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "2",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "11",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "2, 1",
    "hitLevel": "h, h",
    "damage": "9,12",
    "startupFrames": "11",
    "blockFrames": "-7~-6",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "2, 2",
    "hitLevel": "h, m",
    "damage": "9,20",
    "startupFrames": "11",
    "blockFrames": "-13",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "14",
    "blockFrames": "-8",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "3, 2",
    "hitLevel": "h, h",
    "damage": "15,10",
    "startupFrames": "14",
    "blockFrames": "-2",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "3, 2, D",
    "hitLevel": "h, h, (BOK)",
    "damage": "15,10",
    "startupFrames": "14",
    "blockFrames": "-6",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "3, 2, 3",
    "hitLevel": "h, h, m",
    "damage": "15,10,26",
    "startupFrames": "14a",
    "blockFrames": "-7~-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3, 2, 3, B (Cancel)",
    "hitLevel": "h, h, (Special)",
    "damage": "15,10",
    "startupFrames": "14a",
    "blockFrames": "-15",
    "hitFrames": "-4",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "3, 2, 4",
    "hitLevel": "h, h, m, (KNK)",
    "damage": "15,10,14",
    "startupFrames": "14",
    "blockFrames": "+8~+9",
    "hitFrames": "+14~+15",
    "counterHitFrames": "+14~+15",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "12",
    "blockFrames": "-7",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "1+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "25 pc8~24",
    "blockFrames": "-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush"
  },
  {
    "command": "2+3",
    "hitLevel": "m(Absorbs 1 h/m hit)",
    "damage": "21",
    "startupFrames": "30~31 (2~)",
    "blockFrames": "-8~-7",
    "hitFrames": "+22g (KND on parry)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+2",
    "hitLevel": "h",
    "damage": "14",
    "startupFrames": "14~16",
    "blockFrames": "-5~-3",
    "hitFrames": "+6~+8",
    "counterHitFrames": "+6~+8",
    "notes": ""
  },
  {
    "command": "f+2, 2",
    "hitLevel": "h, m",
    "damage": "14,21",
    "startupFrames": "14~16",
    "blockFrames": "-12~-11",
    "hitFrames": "+6~+7",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "20~21",
    "blockFrames": "0~+1",
    "hitFrames": "+4~+5",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3, D",
    "hitLevel": "h, (BOK)",
    "damage": "23",
    "startupFrames": "20~21",
    "blockFrames": "+1~+2",
    "hitFrames": "+5~+6",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+2",
    "hitLevel": "m",
    "damage": "32",
    "startupFrames": "18~19",
    "blockFrames": "-14~-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "f+2+3",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "20~21",
    "blockFrames": "-9~-8",
    "hitFrames": "KND(KND)",
    "counterHitFrames": "KND(KND)",
    "notes": ""
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "13~14",
    "blockFrames": "-1~0",
    "hitFrames": "+7~+8",
    "counterHitFrames": "+7~+8",
    "notes": ""
  },
  {
    "command": "d/f+1, 2",
    "hitLevel": "m, h",
    "damage": "13,20",
    "startupFrames": "13~14",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "15~16",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch (JG?)(-2a)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "17~19",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "13",
    "blockFrames": "-6",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "d/f+2+3",
    "hitLevel": "l (TC)",
    "damage": "19",
    "startupFrames": "23~24s cs6~",
    "blockFrames": "-12~-11",
    "hitFrames": "+5",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "18~19",
    "blockFrames": "-3~-2",
    "hitFrames": "+4~+5s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1, D",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "18~19s",
    "blockFrames": "-3~-2",
    "hitFrames": "+4~+5s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+2",
    "hitLevel": "m",
    "damage": "23",
    "startupFrames": "21",
    "blockFrames": "+4s",
    "hitFrames": "+9s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l",
    "damage": "10",
    "startupFrames": "16~17",
    "blockFrames": "-12~-11",
    "hitFrames": "-1~0",
    "counterHitFrames": "-1~0",
    "notes": ""
  },
  {
    "command": "d+4, 2",
    "hitLevel": "l, h",
    "damage": "10,23",
    "startupFrames": "16~17",
    "blockFrames": "-5~-4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "h",
    "damage": "11",
    "startupFrames": "14~15",
    "blockFrames": "-17~-16",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "d/b+2, 2",
    "hitLevel": "h, m",
    "damage": "11,17",
    "startupFrames": "14~15",
    "blockFrames": "-4~-3",
    "hitFrames": "+8~+9s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+3",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "31~32",
    "blockFrames": "-8~-7",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "d/b+4 (Close)",
    "hitLevel": "l (TC)",
    "damage": "18",
    "startupFrames": "20~22 cs10~",
    "blockFrames": "-31",
    "hitFrames": "+2~+4 (KND)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+4",
    "hitLevel": "l (TC)",
    "damage": "12",
    "startupFrames": "20~22 cs10~",
    "blockFrames": "-31",
    "hitFrames": "+2~+4 (KND)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+4, 1",
    "hitLevel": "l (TC), m",
    "damage": "12(18),27",
    "startupFrames": "20~22 13~",
    "blockFrames": "-16~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+1+2",
    "hitLevel": "m",
    "damage": "17",
    "startupFrames": "21~23",
    "blockFrames": "-9~-7",
    "hitFrames": "+7~+9",
    "counterHitFrames": "+7~+9",
    "notes": ""
  },
  {
    "command": "d/b+1+2, 1",
    "hitLevel": "m, m",
    "damage": "17,20",
    "startupFrames": "21~23",
    "blockFrames": "-12~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+1+2, D",
    "hitLevel": "m, (BOK)",
    "damage": "17",
    "startupFrames": "21~23",
    "blockFrames": "-12~-10",
    "hitFrames": "+4~+6",
    "counterHitFrames": "+4~+6",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "m",
    "damage": "17",
    "startupFrames": "18~19",
    "blockFrames": "-12~-11",
    "hitFrames": "+1~+2",
    "counterHitFrames": "+1~+2",
    "notes": ""
  },
  {
    "command": "b+1, 4",
    "hitLevel": "m, m, (KNK)",
    "damage": "17,14",
    "startupFrames": "18~19",
    "blockFrames": "+8~+9",
    "hitFrames": "+14~+15",
    "counterHitFrames": "+14~+15",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "m",
    "damage": "11",
    "startupFrames": "15",
    "blockFrames": "-11",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "b+2, 1",
    "hitLevel": "m, h",
    "damage": "11,11",
    "startupFrames": "15",
    "blockFrames": "-4~-3",
    "hitFrames": "+7~+8",
    "counterHitFrames": "+7~+8",
    "notes": ""
  },
  {
    "command": "b+2, 1+2",
    "hitLevel": "m, m",
    "damage": "11,21",
    "startupFrames": "15",
    "blockFrames": "-11~-10s",
    "hitFrames": "+8~+9s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+3",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "14~15",
    "blockFrames": "-7~-8",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "b+3, 1",
    "hitLevel": "m, m",
    "damage": "15,16",
    "startupFrames": "14~15",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "b+3, 1, B",
    "hitLevel": "m, m, (KNK)",
    "damage": "15,16",
    "startupFrames": "14~15",
    "blockFrames": "-11",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "b+3, 1, D",
    "hitLevel": "m, m, (BOK)",
    "damage": "15,16",
    "startupFrames": "14~15",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "18",
    "blockFrames": "-8",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "b+4, 1+2",
    "hitLevel": "m, m",
    "damage": "15,20",
    "startupFrames": "18",
    "blockFrames": "-12~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "b+4, 1+2, d",
    "hitLevel": "m, m",
    "damage": "15",
    "startupFrames": "18",
    "blockFrames": "-16~-15",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": "Ends in crouch"
  },
  {
    "command": "b+1+4",
    "hitLevel": "hl",
    "damage": "10,12",
    "startupFrames": "19,21",
    "blockFrames": "-13",
    "hitFrames": "+3",
    "counterHitFrames": "+16s",
    "notes": ""
  },
  {
    "command": "b+1+4 (First hit only)",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "19",
    "blockFrames": "-15",
    "hitFrames": "-4",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "b+1+4 (Second hit only)",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "21",
    "blockFrames": "-13",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "b+2+3",
    "hitLevel": "!",
    "damage": "60",
    "startupFrames": "70~71",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+1",
    "hitLevel": "h",
    "damage": "8",
    "startupFrames": "13",
    "blockFrames": "-1",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "u/f+1, 1",
    "hitLevel": "h, h",
    "damage": "8,17",
    "startupFrames": "13",
    "blockFrames": "-9~-8",
    "hitFrames": "+15~+16kg",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "u/f+1, 2",
    "hitLevel": "h, m",
    "damage": "8,21",
    "startupFrames": "13",
    "blockFrames": "-14~-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+2",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "18~21a",
    "blockFrames": "-14~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+2, 1",
    "hitLevel": "m, m",
    "damage": "15,17",
    "startupFrames": "js1~15",
    "blockFrames": "-8~-7",
    "hitFrames": "+4~+5",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u+3",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "17 js9~",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3",
    "hitLevel": "m (TJ)",
    "damage": "21",
    "startupFrames": "17 js9~",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "11",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-19~-18",
    "hitFrames": "-8~-7",
    "counterHitFrames": "-8~-7",
    "notes": ""
  },
  {
    "command": "u+4",
    "hitLevel": "m (TJ)",
    "damage": "15",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/f+4",
    "hitLevel": "m (TJ)",
    "damage": "13",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u or u/f+3+4",
    "hitLevel": "m (TJ)",
    "damage": "26",
    "startupFrames": "24~27 js9~",
    "blockFrames": "0~+3s",
    "hitFrames": "+6~+9s",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "f, F+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "14~15 (15~)",
    "blockFrames": "-10~-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "26~29a (27~) js9~",
    "blockFrames": "–7~-4s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3, D",
    "hitLevel": "m (TJ), (BOK)",
    "damage": "20",
    "startupFrames": "26~29a (27~) js9~",
    "blockFrames": "+1~+4s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+4",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "19~20a (20~) js17~",
    "blockFrames": "-13~-12",
    "hitFrames": "-2~-1a",
    "counterHitFrames": "-2~-1a",
    "notes": ""
  },
  {
    "command": "f, F+4, 3",
    "hitLevel": "m, h",
    "damage": "12,23",
    "startupFrames": "js1~",
    "blockFrames": "-14~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f, F+4, 3, 4",
    "hitLevel": "m, h, l",
    "damage": "12,23,17",
    "startupFrames": "js1~10 cs20~",
    "blockFrames": "-12~-10",
    "hitFrames": "-1~+1",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b, f+1+2",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "17~18",
    "blockFrames": "-24~-23",
    "hitFrames": "-11~-10",
    "counterHitFrames": "-11~-10",
    "notes": ""
  },
  {
    "command": "b, f+1+2, 1+2",
    "hitLevel": "m, m",
    "damage": "15,13",
    "startupFrames": "17~18",
    "blockFrames": "-14~-13",
    "hitFrames": "-3~-2",
    "counterHitFrames": "+7~+8",
    "notes": ""
  },
  {
    "command": "b, f+1+2, 1+2, 2",
    "hitLevel": "m, m, m",
    "damage": "15,13,25",
    "startupFrames": "17~18",
    "blockFrames": "-16~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b, f+1+2, 1+2, qcf+2",
    "hitLevel": "m, m, m",
    "damage": "15,13,30",
    "startupFrames": "17~18",
    "blockFrames": "-16~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+3",
    "hitLevel": "m (TJ)",
    "damage": "30",
    "startupFrames": "23~26a (26~) js3~",
    "blockFrames": "+9~+12g",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "14~15",
    "blockFrames": "-8~-7",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "WS+1, 4",
    "hitLevel": "m, l",
    "damage": "13,12",
    "startupFrames": "14~15",
    "blockFrames": "-12~-11",
    "hitFrames": "-1~0",
    "counterHitFrames": "-1~0",
    "notes": ""
  },
  {
    "command": "WS+1, 4, 1",
    "hitLevel": "m, l, m",
    "damage": "13,12,24",
    "startupFrames": "14~15",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m?",
    "damage": "15",
    "startupFrames": "16~17",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "WS+3",
    "hitLevel": "m",
    "damage": "9",
    "startupFrames": "13~14",
    "blockFrames": "-6~-5",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "WS+3, 1",
    "hitLevel": "m, m",
    "damage": "9,9",
    "startupFrames": "13~14",
    "blockFrames": "-10",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "WS+3, 1, 2",
    "hitLevel": "m, m, h",
    "damage": "9,9,20",
    "startupFrames": "13~14",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "11~12",
    "blockFrames": "-12~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+4, 1+2",
    "hitLevel": "m, m",
    "damage": "15,28",
    "startupFrames": "11~12",
    "blockFrames": "-12~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+1+2",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "13~15",
    "blockFrames": "-15~-13",
    "hitFrames": "+22g(KND)",
    "counterHitFrames": "+22g(KND)",
    "notes": ""
  },
  {
    "command": "FC+d/f+3",
    "hitLevel": "l",
    "damage": "20",
    "startupFrames": "21~23s cs1~",
    "blockFrames": "-26",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+1+2",
    "hitLevel": "m",
    "damage": "30",
    "startupFrames": "19(28~)",
    "blockFrames": "-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT 1+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "11",
    "blockFrames": "-20",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "Opponent Down d+3+4",
    "hitLevel": "On grounded opponent(l)",
    "damage": "19",
    "startupFrames": "24",
    "blockFrames": "-13",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "1+2+3+4",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "24",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "1+2+3+4, b+3",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "14~15 (79~)",
    "blockFrames": "-7~-6",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "1+2+3+4, b+3, 1",
    "hitLevel": "m, m",
    "damage": "18,16",
    "startupFrames": "14~15 (79~)",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "1+2+3+4, b+3, 1, 2",
    "hitLevel": "m, m, m",
    "damage": "18,16,20",
    "startupFrames": "14~15 (79~)",
    "blockFrames": "-15~-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1+2+3+4, d/b+4",
    "hitLevel": "l (TC)",
    "damage": "14(21)",
    "startupFrames": "20~22 (85~) cs13~",
    "blockFrames": "-31",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1+2+3+4, d/b+4, 1",
    "hitLevel": "l, m",
    "damage": "14(21),27",
    "startupFrames": "20~22 (85~) cs10~",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1+2+3+4, d/b+4, 1, 2",
    "hitLevel": "l, m, m",
    "damage": "14(21),27,20",
    "startupFrames": "20~22 (85~) cs10~",
    "blockFrames": "-15~-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "m, (KNK)",
    "damage": "14",
    "startupFrames": "17~18",
    "blockFrames": "+8~+9",
    "hitFrames": "+14~+15",
    "counterHitFrames": "+14~+15",
    "notes": ""
  },
  {
    "command": "b+3+4",
    "hitLevel": "(KNK)",
    "damage": "",
    "startupFrames": "17~18",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f+4, d/f or KNK d/f (to CD)",
    "hitLevel": "m, (KNK)",
    "damage": "14",
    "startupFrames": "17~18s",
    "blockFrames": "-5~-4",
    "hitFrames": "+1~+2",
    "counterHitFrames": "+1~+2",
    "notes": ""
  },
  {
    "command": "KNK 1",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "18~19",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "KNK 1, 2",
    "hitLevel": "h, m",
    "damage": "12,20",
    "startupFrames": "18~19",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "KNK 1, D",
    "hitLevel": "m, (BOK)",
    "damage": "12",
    "startupFrames": "18~19",
    "blockFrames": "-7~-6",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+4~+5",
    "notes": ""
  },
  {
    "command": "KNK 2",
    "hitLevel": "h",
    "damage": "18",
    "startupFrames": "13~15",
    "blockFrames": "-4~-2",
    "hitFrames": "+15kg",
    "counterHitFrames": "CS",
    "notes": "Tail spin"
  },
  {
    "command": "KNK 3",
    "hitLevel": "m (TJ)",
    "damage": "13",
    "startupFrames": "20~21a",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "KNK 3, 4",
    "hitLevel": "m (TJ), m",
    "damage": "13,27",
    "startupFrames": "20~21a",
    "blockFrames": "-12~-10",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "KNK 4",
    "hitLevel": "l",
    "damage": "18",
    "startupFrames": "20~21a",
    "blockFrames": "-12~-11",
    "hitFrames": "+4~+5",
    "counterHitFrames": "+10~+11",
    "notes": ""
  },
  {
    "command": "KNK 1+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "24",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "d+1+2 or FC+d/b or d+1+2",
    "hitLevel": "(Special) (TC)(BOK)",
    "damage": "",
    "startupFrames": "(s)",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "BOK 1",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "13(33~) cs1~12",
    "blockFrames": "-4",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "BOK 1, 2",
    "hitLevel": "m, m",
    "damage": "14,20",
    "startupFrames": "13(33~) 1~12",
    "blockFrames": "-14~-13",
    "hitFrames": "KND (JG?)",
    "counterHitFrames": "KND (JG?)",
    "notes": ""
  },
  {
    "command": "BOK 2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "19~20 (39~) cs1~17",
    "blockFrames": "-9~-8",
    "hitFrames": "Launch(JG?)",
    "counterHitFrames": "Launch(JG?)",
    "notes": ""
  },
  {
    "command": "BOK 3",
    "hitLevel": "h (TJ)",
    "damage": "30",
    "startupFrames": "21(41~) js10~",
    "blockFrames": "+9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "BOK 4",
    "hitLevel": "m, (KNK)",
    "damage": "14",
    "startupFrames": "20(40~)",
    "blockFrames": "+8",
    "hitFrames": "+14",
    "counterHitFrames": "+14",
    "notes": ""
  },
  {
    "command": "BOK 1+2",
    "hitLevel": "h",
    "damage": "26",
    "startupFrames": "26(46~) pc8~25",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush"
  },
  {
    "command": "qcf or KNK D/F",
    "hitLevel": "(CD)",
    "damage": "",
    "startupFrames": "26(46~) 8~25",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "qcf+1",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "18~19s (20~) cs6~",
    "blockFrames": "-13~-12",
    "hitFrames": "-2~-1",
    "counterHitFrames": "+11~+12",
    "notes": ""
  },
  {
    "command": "qcf+2",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "17(19~)",
    "blockFrames": "-9",
    "hitFrames": "+9",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+2, B",
    "hitLevel": "m, (KNK)",
    "damage": "14",
    "startupFrames": "16(18~)",
    "blockFrames": "-9",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "qcf+2, 1",
    "hitLevel": "m, m",
    "damage": "14,17",
    "startupFrames": "16(18~)",
    "blockFrames": "-6~-5",
    "hitFrames": "+7~+8",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+3+4",
    "hitLevel": "mm (TJ)",
    "damage": "6,20",
    "startupFrames": "18~20, 24~26 (20~) js17~",
    "blockFrames": "-6~-4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+3+4 (First hit only, Second hit miss)",
    "hitLevel": "m (TJ)",
    "damage": "6",
    "startupFrames": "18(20~) js17~",
    "blockFrames": "-17",
    "hitFrames": "-6",
    "counterHitFrames": "-6",
    "notes": "Homing"
  },
  {
    "command": "d, D/F, n",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "18(20~) 17~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
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
    "command": "d+3+4",
    "hitLevel": "l (TC)",
    "damage": "7",
    "startupFrames": "12s cs4~",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
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
    "command": "u/b+1",
    "hitLevel": "(Special)(h or m punch parry)",
    "damage": "",
    "startupFrames": "18",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u+1 or u/f+1+2",
    "hitLevel": "m (TJ)",
    "damage": "12",
    "startupFrames": "18 js9~",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "u/b or u+2",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "15~16",
    "blockFrames": "-12~-11",
    "hitFrames": "+9~+10g",
    "counterHitFrames": "+9~+10g",
    "notes": ""
  },
  {
    "command": "u/f+2, D",
    "hitLevel": "m (BOK)",
    "damage": "15",
    "startupFrames": "18~21a",
    "blockFrames": "-15~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+3",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "21 js9~",
    "blockFrames": "-17",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f, n+4",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "23(29,35) js9~33",
    "blockFrames": "-11(-13)",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
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
    "command": "FC+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "11s cs1~",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+3",
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
    "command": "SS+1",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10(11~)",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "SS+2",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "11(12~)",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "SS+3",
    "hitLevel": "h",
    "damage": "15",
    "startupFrames": "14(15~)",
    "blockFrames": "-8",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "12(13~)",
    "blockFrames": "-7",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
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
    "command": "in rage d/f+1+2",
    "hitLevel": "m",
    "damage": "55",
    "startupFrames": "20 pc8~17",
    "blockFrames": "-22",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art"
  },
  {
    "command": "in rage f, F+2*",
    "hitLevel": "m",
    "damage": "35",
    "startupFrames": "13(14~)",
    "blockFrames": "+6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage drive"
  }
];