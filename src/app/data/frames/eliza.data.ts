import { CharacterFrameData } from "../framedata.interface";

export const Eliza: CharacterFrameData[] = [
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
    "command": "2",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "14",
    "blockFrames": "-3",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "13",
    "blockFrames": "-8",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "13",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
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
    "command": "f+2",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "14",
    "blockFrames": "-3",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "m",
    "damage": "17",
    "startupFrames": "18~19",
    "blockFrames": "-9~-8",
    "hitFrames": "0~+1",
    "counterHitFrames": "+25g(KND)",
    "notes": ""
  },
  {
    "command": "f+4 (to MG)",
    "hitLevel": "(MG)",
    "damage": "",
    "startupFrames": "18~19",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "13",
    "blockFrames": "-3",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "16~17",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m (TJ)",
    "damage": "24",
    "startupFrames": "25~26 js9~",
    "blockFrames": "-8~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "12",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "d/b or d+1",
    "hitLevel": "Sm (TC)",
    "damage": "5",
    "startupFrames": "10s cs4~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": "+3 on hit from side or behind"
  },
  {
    "command": "d/b or d+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "12s cs4~",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/b or d+3 (Close)",
    "hitLevel": "l (TC)",
    "damage": "10",
    "startupFrames": "15s cs4~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d/b or d+3",
    "hitLevel": "l (TC)",
    "damage": "7",
    "startupFrames": "15s cs4~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d/b or d+4",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "20~21s cs6~",
    "blockFrames": "-27",
    "hitFrames": "+5~+6s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "14",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "11",
    "blockFrames": "-4",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "b+3",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "16",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "Sm",
    "damage": "12",
    "startupFrames": "15",
    "blockFrames": "-14",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "u/b or U/F",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "js5~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "U",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "js9~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "14",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "15~16a",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "JG",
    "notes": ""
  },
  {
    "command": "WS+3",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "15~16a js15~",
    "blockFrames": "-22~-21",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "11~12",
    "blockFrames": "-5~-4",
    "hitFrames": "+6~+7",
    "counterHitFrames": "+6~+7",
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
    "startupFrames": "12s cs1~",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "FC+3 (Close)",
    "hitLevel": "l (TC)",
    "damage": "10",
    "startupFrames": "15s cs1~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "FC+3",
    "hitLevel": "l (TC)",
    "damage": "7",
    "startupFrames": "15s cs1~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "FC+4",
    "hitLevel": "l (TC)",
    "damage": "20",
    "startupFrames": "20~21s cs1~",
    "blockFrames": "-27",
    "hitFrames": "+3~+4s",
    "counterHitFrames": "KND",
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
    "startupFrames": "14(15~)",
    "blockFrames": "-3",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "SS+3",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "13(14~)",
    "blockFrames": "-8",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "13(14~)",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "BT 1 or 2",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "BT 3 or 4",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "13",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "BT d+1 or d+2",
    "hitLevel": "Sm",
    "damage": "5",
    "startupFrames": "10s cs1~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": "+3 on hit from side or behind"
  },
  {
    "command": "BT d+3 or d+4",
    "hitLevel": "l (TC)",
    "damage": "20",
    "startupFrames": "20~21s cs1~",
    "blockFrames": "-27",
    "hitFrames": "+3~+4s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1 or BT 1 or 2",
    "hitLevel": "h",
    "damage": "7",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "1, 1",
    "hitLevel": "h, h",
    "damage": "7,7",
    "startupFrames": "10",
    "blockFrames": "-3",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "1, 2",
    "hitLevel": "h, h",
    "damage": "7,10",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "1, 2, 3",
    "hitLevel": "h, h, m (TJ)",
    "damage": "7,10,20",
    "startupFrames": "js19~",
    "blockFrames": "-22~-21",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "1, 2, 4",
    "hitLevel": "h, h, h",
    "damage": "7,10,20",
    "startupFrames": "19~",
    "blockFrames": "-4~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "2 or f+2",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "14",
    "blockFrames": "-3",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "2, 2",
    "hitLevel": "h, m",
    "damage": "9,15",
    "startupFrames": "14",
    "blockFrames": "-12",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "4 or BT 3 or 4",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "13",
    "blockFrames": "-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "1+2",
    "hitLevel": "m",
    "damage": "26",
    "startupFrames": "13~14",
    "blockFrames": "-17~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4",
    "hitLevel": "l (TJ)",
    "damage": "20",
    "startupFrames": "33~34a js9~23 cs23~",
    "blockFrames": "-27",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "f+1+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "25 pc8~24",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": "Homing, Power crush"
  },
  {
    "command": "d/f+1, 2",
    "hitLevel": "m, m",
    "damage": "12,17",
    "startupFrames": "13",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "d/f+1, 4",
    "hitLevel": "m, h",
    "damage": "12,14",
    "startupFrames": "13",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "d/f+2, 3",
    "hitLevel": "m, m (TJ)",
    "damage": "10,10",
    "startupFrames": "js14~",
    "blockFrames": "-18~-17",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d/b or d+1 or FC+1 or BT d+1 or d+2",
    "hitLevel": "Sm",
    "damage": "5",
    "startupFrames": "10s cs4or1~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": "+3 on hit from side or behind"
  },
  {
    "command": "d/b or d+2 or FC+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "12s cs4or1~",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/b or d+3 or FC+3 (Close)",
    "hitLevel": "l (TC)",
    "damage": "10",
    "startupFrames": "15s cs4or1~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d/b or d+3 or FC+3",
    "hitLevel": "l (TC)",
    "damage": "7",
    "startupFrames": "15s cs4or1~",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "d/b or d+4 or FC+4 or BT d+3 or d+4",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "20~21s cs6or1~",
    "blockFrames": "-27",
    "hitFrames": "+5~+6s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+1+2 or FC+d/b or d+1+2 Grounded face upd+1+2",
    "hitLevel": "(Special) (TC)",
    "damage": "",
    "startupFrames": "20~21 61~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "d/b+1+2",
    "hitLevel": "! (TJ)",
    "damage": "30",
    "startupFrames": "51~52 js21~50",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1, 2",
    "hitLevel": "m, m",
    "damage": "13,13",
    "startupFrames": "14a",
    "blockFrames": "-13~-11",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "b+1, 2, 4",
    "hitLevel": "m, m, m (TJ)",
    "damage": "13,13,23",
    "startupFrames": "js1~",
    "blockFrames": "-13~-12s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2, 3",
    "hitLevel": "h, m",
    "damage": "10,15",
    "startupFrames": "11",
    "blockFrames": "-9~-8",
    "hitFrames": "+3~+4",
    "counterHitFrames": "uKZD",
    "notes": ""
  },
  {
    "command": "b+3, 1",
    "hitLevel": "h, h",
    "damage": "12,20",
    "startupFrames": "16",
    "blockFrames": "-4~-3",
    "hitFrames": "+15~+16kg",
    "counterHitFrames": "+15~+16kg",
    "notes": "Tail spin"
  },
  {
    "command": "b+3, 4",
    "hitLevel": "h, m",
    "damage": "12,20",
    "startupFrames": "16",
    "blockFrames": "-14~-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1+2",
    "hitLevel": "hm",
    "damage": "5,20",
    "startupFrames": "27~28,37~38",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+2 When hit , b",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "14(15~)",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f+2 When hit or MG 2 When hit",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "14(15~)",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "16~17 (17~)",
    "blockFrames": "-10~-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "f, F+3, 4",
    "hitLevel": "h, h (TJ)",
    "damage": "12,21",
    "startupFrames": "js5~",
    "blockFrames": "-7~-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f, F+4",
    "hitLevel": "m (TJ)",
    "damage": "10",
    "startupFrames": "15~16 (16~) js12~",
    "blockFrames": "-16~-15",
    "hitFrames": "-5~-4",
    "counterHitFrames": "-5~-4",
    "notes": ""
  },
  {
    "command": "f, F+4, 2",
    "hitLevel": "m (TJ), m",
    "damage": "10,10",
    "startupFrames": "js1~",
    "blockFrames": "-14~-13",
    "hitFrames": "-6~-5 (BU)",
    "counterHitFrames": "-6~-5 (BU)",
    "notes": ""
  },
  {
    "command": "f, F+4, 2, qcf+1 (SSL)",
    "hitLevel": "m (TJ), m, Sm(DW)",
    "damage": "10,10,20",
    "startupFrames": "1~",
    "blockFrames": "-10~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+4, 2, qcf+2 (SSR)",
    "hitLevel": "m (TJ), m, Sm(DW)",
    "damage": "10,10,20",
    "startupFrames": "1~",
    "blockFrames": "-13~+17",
    "hitFrames": "-5~+25",
    "counterHitFrames": "-5~+25",
    "notes": ""
  },
  {
    "command": "f, F+4, 2, qcf+1, f or d/f+3+4 (SSL)",
    "hitLevel": "m (TJ), m, Sm, (MG)",
    "damage": "10,10,20",
    "startupFrames": "1~",
    "blockFrames": "+2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+4, 2, qcf+2, f or d/f+3+4 (SSR)",
    "hitLevel": "m (TJ), m, Sm, (MG)",
    "damage": "10,10,20",
    "startupFrames": "1~",
    "blockFrames": "+2~+32",
    "hitFrames": "+10~+40",
    "counterHitFrames": "+10~+40",
    "notes": ""
  },
  {
    "command": "f, F+4, 2, qcf+1+2",
    "hitLevel": "m (TJ), m, SmSm",
    "damage": "10,10,20,20",
    "startupFrames": "1~",
    "blockFrames": "+5",
    "hitFrames": "KND(KND)",
    "counterHitFrames": "KND(KND)",
    "notes": ""
  },
  {
    "command": "f, F+1+2",
    "hitLevel": "mh (TJ)l",
    "damage": "5,6,20",
    "startupFrames": "18,31,47 (19~) js25~40",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+1 or WR+1",
    "hitLevel": "h",
    "damage": "30",
    "startupFrames": "18~20 (21~)",
    "blockFrames": "+2~+4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f, f, f+3 or WR+3",
    "hitLevel": "m",
    "damage": "27",
    "startupFrames": "24~28a (27~) js3~",
    "blockFrames": "0~+4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+D (One second)",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "11~12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Jump 1 BT u or u/f+1",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "7a(12~) js1~",
    "blockFrames": "-25~0",
    "hitFrames": "-15~+10",
    "counterHitFrames": "-15~+10",
    "notes": ""
  },
  {
    "command": "Jump 2 BT u or u/f+2",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "9a(12~) js1~",
    "blockFrames": "-17~+8",
    "hitFrames": "-7~+18",
    "counterHitFrames": "-7~+18",
    "notes": ""
  },
  {
    "command": "Jump 3 BT u or u/f+3",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "7a(12~) js1~",
    "blockFrames": "-25~0",
    "hitFrames": "-15~+10",
    "counterHitFrames": "-15~+10",
    "notes": ""
  },
  {
    "command": "Jump 4 BT u or u/f+4",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "9a(14~) js1~",
    "blockFrames": "-18~+7",
    "hitFrames": "-8~+17",
    "counterHitFrames": "-8~+17",
    "notes": ""
  },
  {
    "command": "Grounded face up 1+2",
    "hitLevel": "(Special) (TC)",
    "damage": "",
    "startupFrames": "9(14~) 1~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "2+3+4",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "9(14~) 1~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "(MG)",
    "damage": "",
    "startupFrames": "9(14~) 1~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "MG 1",
    "hitLevel": "h",
    "damage": "11",
    "startupFrames": "10(25~)",
    "blockFrames": "-4",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "MG 1, 2",
    "hitLevel": "h, h",
    "damage": "11,12",
    "startupFrames": "10(25~)",
    "blockFrames": "-8",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "MG 1, 2, 1+2",
    "hitLevel": "h, h, m",
    "damage": "11,12,21",
    "startupFrames": "10(25~)",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "MG 2",
    "hitLevel": "m(, (Special))(DS)",
    "damage": "25",
    "startupFrames": "14(29~)",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce (if transitioned)"
  },
  {
    "command": "MG 3",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "16~17 (31~)",
    "blockFrames": "-10~-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "MG 3, 4",
    "hitLevel": "h, h (TJ)",
    "damage": "12,21",
    "startupFrames": "js5~",
    "blockFrames": "-7~-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "MG 4",
    "hitLevel": "l",
    "damage": "20",
    "startupFrames": "18~25 (33~) cs10~",
    "blockFrames": "-24~-17",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "MG 1+2",
    "hitLevel": "! (TJ)",
    "damage": "30",
    "startupFrames": "51~52a (66~) js21~50",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+1 (SSL)",
    "hitLevel": "Sm",
    "damage": "20",
    "startupFrames": "28~48 (28~)",
    "blockFrames": "-9~+11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+2 (SSR)",
    "hitLevel": "Sm",
    "damage": "20",
    "startupFrames": "25~55 (25~)",
    "blockFrames": "-13~+17",
    "hitFrames": "-5~+25",
    "counterHitFrames": "-5~+25",
    "notes": ""
  },
  {
    "command": "f, d, d/f+1 (SSL)",
    "hitLevel": "Sm",
    "damage": "12",
    "startupFrames": "16a(16~)",
    "blockFrames": "-22 (12~8a)",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "f, d, d/f+2 (SSR)",
    "hitLevel": "Sm x 3",
    "damage": "9,9,9",
    "startupFrames": "13,22,31a (13~)",
    "blockFrames": "-36 (19~8a)",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "qcb+1",
    "hitLevel": "Sm",
    "damage": "20",
    "startupFrames": "20~21 (20~)",
    "blockFrames": "-11~-10",
    "hitFrames": "+11kg",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "qcb+2",
    "hitLevel": "Sm",
    "damage": "22",
    "startupFrames": "20~21 (20~)",
    "blockFrames": "-13~-12",
    "hitFrames": "-2~-1",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "qcb+3 (SSL)",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "27~36a (27~) js9~",
    "blockFrames": "-19~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcb+4 (SSR)",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "26~33a (26~) js9~",
    "blockFrames": "-1~+6",
    "hitFrames": "+9~+16s",
    "counterHitFrames": "+9~+16s",
    "notes": ""
  },
  {
    "command": "Jump qcb+3 (SSL)",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "13~a (~) js1~",
    "blockFrames": "-14~-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "Jump qcb+4 (SSR)",
    "hitLevel": "m (TJ)",
    "damage": "14",
    "startupFrames": "13~a(~) js1~",
    "blockFrames": "-1~+6",
    "hitFrames": "+9~+16s",
    "counterHitFrames": "+9~+16s",
    "notes": ""
  },
  {
    "command": "qcf+1, f or d/f+3+4 (SSL)",
    "hitLevel": "Sm, (MG)",
    "damage": "20",
    "startupFrames": "13~(~) 1~",
    "blockFrames": "+2~",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcf+2, f or d/f+3+4 (SSR)",
    "hitLevel": "Sm, (MG)",
    "damage": "20",
    "startupFrames": "13~(~) 1~",
    "blockFrames": "+2~+32",
    "hitFrames": "+10~+40",
    "counterHitFrames": "+10~+40",
    "notes": ""
  },
  {
    "command": "qcf+1+2",
    "hitLevel": "SmSm",
    "damage": "10,10",
    "startupFrames": "24,53~ (24~)",
    "blockFrames": "+10g",
    "hitFrames": "KND(KND)",
    "counterHitFrames": "KND(KND)",
    "notes": ""
  },
  {
    "command": "f, d, d/f+1+2",
    "hitLevel": "Sm x 5",
    "damage": "5,5,9,9,9",
    "startupFrames": "11,,,a (11~)",
    "blockFrames": "-34",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "qcb+1+2",
    "hitLevel": "SmSm",
    "damage": "10,20",
    "startupFrames": "15,37(15~)",
    "blockFrames": "-14~-13",
    "hitFrames": "+11kg",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "qcb+3+4",
    "hitLevel": "m (TJ), m",
    "damage": "5,15",
    "startupFrames": "25~32a ,49~50 (26~) js9~",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "Jump qcb+3+4",
    "hitLevel": "m (TJ), m",
    "damage": "5,15",
    "startupFrames": "10~a, 35~36 (~) js1~",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "Two meter bars qcf, qcf+1+2",
    "hitLevel": "Sm",
    "damage": "15",
    "startupFrames": "15",
    "blockFrames": "-7",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "in rage b+3+4",
    "hitLevel": "m (TJ)",
    "damage": "55",
    "startupFrames": "20 js13~17 pc8~17",
    "blockFrames": "-22",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art"
  }
];