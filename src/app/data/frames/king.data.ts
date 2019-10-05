import { CharacterFrameData } from "../framedata.interface";

export const King: CharacterFrameData[] = [
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
    "damage": "7,15",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "1, 2, 2+4",
    "hitLevel": "h, h, h(Throw)",
    "damage": "7,15,30",
    "startupFrames": "10",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "1, 2, d+2+4",
    "hitLevel": "h, h, l(Throw)",
    "damage": "7,15,45",
    "startupFrames": "10",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "1, 2, 1",
    "hitLevel": "h, h, m",
    "damage": "7,15,10",
    "startupFrames": "10",
    "blockFrames": "-4~-3",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+10~+11",
    "notes": ""
  },
  {
    "command": "1, 2, 1, 2+4",
    "hitLevel": "h, h, m, h(Throw)",
    "damage": "7,15,10,40",
    "startupFrames": "10",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "1, 2, 1, d+2+4",
    "hitLevel": "h, h, m, l(Throw)",
    "damage": "7,15,10,45",
    "startupFrames": "10",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "2",
    "hitLevel": "h",
    "damage": "10",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "2, 1",
    "hitLevel": "h, m",
    "damage": "10,15",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "1+2",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "18~20b",
    "blockFrames": "-11~-9",
    "hitFrames": "-2~0",
    "counterHitFrames": "0~+2",
    "notes": ""
  },
  {
    "command": "1+2, 1",
    "hitLevel": "m, m",
    "damage": "18,21",
    "startupFrames": "18~20",
    "blockFrames": "-13",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "1+2, 3",
    "hitLevel": "m, h",
    "damage": "18,25",
    "startupFrames": "18~20",
    "blockFrames": "-3~-2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "1+4",
    "hitLevel": "!",
    "damage": "23",
    "startupFrames": "52~56ad",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT 1+4",
    "hitLevel": "!",
    "damage": "30",
    "startupFrames": "41~45ad",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "15~16",
    "blockFrames": "-11~-10",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "f+2, 1",
    "hitLevel": "m, h",
    "damage": "12,25",
    "startupFrames": "15~16",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+2, d+1",
    "hitLevel": "h, m",
    "damage": "12,15",
    "startupFrames": "15~16",
    "blockFrames": "-13s",
    "hitFrames": "+2s",
    "counterHitFrames": "+2s",
    "notes": ""
  },
  {
    "command": "f+2, d+1, 2",
    "hitLevel": "h, m, m",
    "damage": "12,15,16",
    "startupFrames": "15~16",
    "blockFrames": "-15",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "15~16",
    "blockFrames": "-8~-7",
    "hitFrames": "+1~+2",
    "counterHitFrames": "+9~+10",
    "notes": ""
  },
  {
    "command": "f+4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "18~20 js9~",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "f+1+2",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "16~17",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+2*",
    "hitLevel": "h!?",
    "damage": "50",
    "startupFrames": "29~32",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3+4",
    "hitLevel": "h (TJ)",
    "damage": "25",
    "startupFrames": "28~30 (38~) js9~",
    "blockFrames": "+7~+9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3+4",
    "hitLevel": "h (TJ)",
    "damage": "25",
    "startupFrames": "28~30 (29~) js9~",
    "blockFrames": "+7~+9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+4",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "17~19",
    "blockFrames": "+3~+5",
    "hitFrames": "+7~+9",
    "counterHitFrames": "+7~+9",
    "notes": ""
  },
  {
    "command": "f+2+3",
    "hitLevel": "m",
    "damage": "27",
    "startupFrames": "23~30 pc8~22",
    "blockFrames": "-12~-5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush"
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "14~16",
    "blockFrames": "-1~+1",
    "hitFrames": "+3~+5",
    "counterHitFrames": "+3~+5",
    "notes": ""
  },
  {
    "command": "d/f+1, 2",
    "hitLevel": "m, m",
    "damage": "15,15",
    "startupFrames": "14~16",
    "blockFrames": "-10~-9",
    "hitFrames": "+3~+4",
    "counterHitFrames": "+3~+4",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "13",
    "blockFrames": "-6",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "d/f+2, 1",
    "hitLevel": "m, h",
    "damage": "12,15",
    "startupFrames": "13",
    "blockFrames": "-4~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "17",
    "startupFrames": "14",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "d/f+3, 4",
    "hitLevel": "m, h (TJ)",
    "damage": "17,23",
    "startupFrames": "d js22~",
    "blockFrames": "0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+4",
    "hitLevel": "l",
    "damage": "13",
    "startupFrames": "14~15",
    "blockFrames": "-14~-13",
    "hitFrames": "-3~-2",
    "counterHitFrames": "-3~-2",
    "notes": ""
  },
  {
    "command": "d/f+4, 3",
    "hitLevel": "l, h",
    "damage": "10,11",
    "startupFrames": "14~15",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/f+4, 3, 4",
    "hitLevel": "l, h, m (TJ)",
    "damage": "10,11,27",
    "startupFrames": "~js18~",
    "blockFrames": "-15~-14",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "d/f+4, 3, 4, B",
    "hitLevel": "l, h, m (TJ)",
    "damage": "10,11,27",
    "startupFrames": "b js18~",
    "blockFrames": "-8~-7",
    "hitFrames": "KND",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "d/f+4, 3, d/b or d+4",
    "hitLevel": "l, h, l (TJ)",
    "damage": "10,11,20",
    "startupFrames": "as(d) js25~",
    "blockFrames": "-13~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/f+3+4 (Close)",
    "hitLevel": "Sm (TJ)(, h(Throw))",
    "damage": "15(,30)",
    "startupFrames": "28d(b) js13~",
    "blockFrames": "Throw(KND)",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "Throw(KND)",
    "notes": ""
  },
  {
    "command": "d/f+3+4",
    "hitLevel": "Sm (TJ)",
    "damage": "15",
    "startupFrames": "28~35d js13~",
    "blockFrames": "-18~-11",
    "hitFrames": "-7~0s",
    "counterHitFrames": "-7~0s",
    "notes": ""
  },
  {
    "command": "d+1 or FC+d+1",
    "hitLevel": "Sm (TC)",
    "damage": "5",
    "startupFrames": "10s cs4~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d+1, 2",
    "hitLevel": "Sm (TC), m",
    "damage": "5,13",
    "startupFrames": "10 4~",
    "blockFrames": "-11~-9",
    "hitFrames": "0~+2",
    "counterHitFrames": "0~+2",
    "notes": ""
  },
  {
    "command": "d+3",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "17",
    "blockFrames": "-12",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "d+1+2",
    "hitLevel": "m (TC)",
    "damage": "21",
    "startupFrames": "23 cs6~22",
    "blockFrames": "-24",
    "hitFrames": "Launch(JG?)",
    "counterHitFrames": "Launch(JG?)",
    "notes": ""
  },
  {
    "command": "d+3+4 or FC+d/f+4",
    "hitLevel": "l (TC)(ALI)",
    "damage": "14",
    "startupFrames": "16s cs6~",
    "blockFrames": "-25",
    "hitFrames": "-9",
    "counterHitFrames": "-9",
    "notes": ""
  },
  {
    "command": "WR+4",
    "hitLevel": "l (TC)(ALI)",
    "damage": "22",
    "startupFrames": "14s cs6~",
    "blockFrames": "-25",
    "hitFrames": "-9",
    "counterHitFrames": "-9",
    "notes": ""
  },
  {
    "command": "d+3+4, 4",
    "hitLevel": "l (TC), l (TC)(ALI)",
    "damage": "14,7",
    "startupFrames": "s cs1~",
    "blockFrames": "-25",
    "hitFrames": "-9",
    "counterHitFrames": "-9",
    "notes": ""
  },
  {
    "command": "d+3+4, 4, 4",
    "hitLevel": "l (TC) x 3(ALI)",
    "damage": "14,7,7",
    "startupFrames": "s cs1~",
    "blockFrames": "-29",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "d+3+4, 4, 4, 4",
    "hitLevel": "l (TC) x 5(ALI)",
    "damage": "16,7,7,4,3",
    "startupFrames": "s cs1~",
    "blockFrames": "-26",
    "hitFrames": "+15",
    "counterHitFrames": "+15",
    "notes": ""
  },
  {
    "command": "ALI 2",
    "hitLevel": "l (TC) x , m",
    "damage": "14,10",
    "startupFrames": "cs1~21",
    "blockFrames": "-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+2+3",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "30~35 ar21~",
    "blockFrames": "-8~-3",
    "hitFrames": "0~+5s",
    "counterHitFrames": "0~+5s",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "25~26",
    "blockFrames": "-5~-4s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+3",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "23s cs10~",
    "blockFrames": "-16",
    "hitFrames": "+2s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d/b+4",
    "hitLevel": "l",
    "damage": "20",
    "startupFrames": "29~31s cs6~14 js16~",
    "blockFrames": "-20~-18a",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "h",
    "damage": "13",
    "startupFrames": "12",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "b+1, 2",
    "hitLevel": "h, h",
    "damage": "13,20",
    "startupFrames": "12",
    "blockFrames": "-13",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "b+1, 4",
    "hitLevel": "h, m",
    "damage": "13,23",
    "startupFrames": "d js16~",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "h",
    "damage": "12",
    "startupFrames": "14",
    "blockFrames": "-5",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "b+2, 1+2",
    "hitLevel": "h, h",
    "damage": "12,22",
    "startupFrames": "14",
    "blockFrames": "+2~+3s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2, 1",
    "hitLevel": "h, h",
    "damage": "14,20",
    "startupFrames": "14",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tailspin"
  },
  {
    "command": "b+2, 4",
    "hitLevel": "h, m",
    "damage": "12,18",
    "startupFrames": "14",
    "blockFrames": "-9",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "Throw(KND)",
    "notes": ""
  },
  {
    "command": "b+3",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "16~18",
    "blockFrames": "-10~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+4 (Close)",
    "hitLevel": "h",
    "damage": "25",
    "startupFrames": "17",
    "blockFrames": "+2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "b+4",
    "hitLevel": "h",
    "damage": "25",
    "startupFrames": "17",
    "blockFrames": "+2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "u/b+1",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "20~23",
    "blockFrames": "-3~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "u/b+2",
    "hitLevel": "m",
    "damage": "35",
    "startupFrames": "47~53d js9~",
    "blockFrames": "-18~-12s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u+2",
    "hitLevel": "m (TJ)(?)",
    "damage": "35",
    "startupFrames": "47~53d js9~",
    "blockFrames": "-18~-12s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+2",
    "hitLevel": "m (TJ)",
    "damage": "35",
    "startupFrames": "48 js9~",
    "blockFrames": "-18s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3 (First part)",
    "hitLevel": "m (TJ)",
    "damage": "23",
    "startupFrames": "22~23d js13~",
    "blockFrames": "-10~-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3 (Second part)",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "24 js1~",
    "blockFrames": "-20",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "11",
    "startupFrames": "15~16 js9~",
    "blockFrames": "-20~-19",
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
    "command": "u/f+1+2",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "35~36 js9~33",
    "blockFrames": "+2~+3s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+1+2*",
    "hitLevel": "! (TJ)",
    "damage": "45",
    "startupFrames": "67~68 js9~60",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3+4",
    "hitLevel": "h (TJ)",
    "damage": "28",
    "startupFrames": "23~24d js5~",
    "blockFrames": "-16~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, N, 2",
    "hitLevel": "l (TC)",
    "damage": "15",
    "startupFrames": "18(19~) cs6~",
    "blockFrames": "-14",
    "hitFrames": "+1",
    "counterHitFrames": "Throw(KND)",
    "notes": ""
  },
  {
    "command": "f, f, N, 1+2",
    "hitLevel": "m",
    "damage": "0",
    "startupFrames": "9(10~)",
    "blockFrames": "0",
    "hitFrames": "+7",
    "counterHitFrames": "+18",
    "notes": ""
  },
  {
    "command": "f, F+1",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "22~23 (23~)",
    "blockFrames": "-5~-4",
    "hitFrames": "+14~+15kg",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "f, F+2",
    "hitLevel": "m",
    "damage": "19",
    "startupFrames": "31~32 (32~)",
    "blockFrames": "+2~+3s",
    "hitFrames": "+4~+5s",
    "counterHitFrames": "+4~+5s",
    "notes": ""
  },
  {
    "command": "f, F+2, 1",
    "hitLevel": "m, h",
    "damage": "19,25",
    "startupFrames": "31~32 (32~)",
    "blockFrames": "-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+4",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "15(16~)",
    "blockFrames": "-15",
    "hitFrames": "KND",
    "counterHitFrames": "Throw(KND)",
    "notes": ""
  },
  {
    "command": "f, F+1+2",
    "hitLevel": "h (TJ)",
    "damage": "21",
    "startupFrames": "20~39a (21~) js18~",
    "blockFrames": "-5~+14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+1+2 (Far)",
    "hitLevel": "l (TJ)",
    "damage": "21",
    "startupFrames": "40~43a (41~) js18~",
    "blockFrames": "-25~-22",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+2+3 (Close)",
    "hitLevel": "m (TJ), (throw)",
    "damage": "20,15",
    "startupFrames": "21~25ad (22~) js12~",
    "blockFrames": "-17~-13s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+2+3",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "26~43ad (27~) js1~",
    "blockFrames": "-12~+5s",
    "hitFrames": "-15~+2s",
    "counterHitFrames": "-15~+2s",
    "notes": ""
  },
  {
    "command": "f, f, f+3",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "20~25 (22~)",
    "blockFrames": "0~+5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+3+4",
    "hitLevel": "m (TJ)",
    "damage": "40",
    "startupFrames": "28~34ad (31~) js9~",
    "blockFrames": "+17~+23g",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m",
    "damage": "11",
    "startupFrames": "14",
    "blockFrames": "-9",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": "Homing"
  },
  {
    "command": "WS+2, 2",
    "hitLevel": "m, m",
    "damage": "11,25",
    "startupFrames": "14",
    "blockFrames": "-12~-11",
    "hitFrames": "+12~+13kg",
    "counterHitFrames": "+12~+13kg",
    "notes": "Tail spin"
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "11~12",
    "blockFrames": "-6~-5",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "WS+1+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "18~19",
    "blockFrames": "-10~-9",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "FC+d/f+1",
    "hitLevel": "l (TC)",
    "damage": "20",
    "startupFrames": "32~34s cs1~",
    "blockFrames": "-12~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+d/f+2",
    "hitLevel": "m",
    "damage": "21",
    "startupFrames": "15~16",
    "blockFrames": "-14~-13",
    "hitFrames": "hKZD",
    "counterHitFrames": "hKZD",
    "notes": ""
  },
  {
    "command": "SS+2",
    "hitLevel": "h",
    "damage": "25",
    "startupFrames": "19~21 (28~)",
    "blockFrames": "-5~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "SS+3+4",
    "hitLevel": "h (TJ)",
    "damage": "50",
    "startupFrames": "27~31ad (36~) js11~",
    "blockFrames": "-1~+3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT 3",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "13",
    "blockFrames": "-13",
    "hitFrames": "+9",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "BT 1+2",
    "hitLevel": "h!",
    "damage": "50",
    "startupFrames": "26~30",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "BT d+4",
    "hitLevel": "l",
    "damage": "20",
    "startupFrames": "22~24 s(d) cs1~5 js11~",
    "blockFrames": "-17~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4 (to JGS)",
    "hitLevel": "(Special) (TJ)(JGS)",
    "damage": "",
    "startupFrames": "a",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "b+3+4",
    "hitLevel": "(Special) (TJ)(JGS)",
    "damage": "",
    "startupFrames": "a",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "3+4, 1 (one spin)",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "19~20 (43~)",
    "blockFrames": "-5~-4",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "3+4, 1 (two spins)",
    "hitLevel": "h",
    "damage": "25",
    "startupFrames": "19~20 (71~)",
    "blockFrames": "-1~0",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "3+4, 1 (three spins)",
    "hitLevel": "h",
    "damage": "31",
    "startupFrames": "19~20 (103~)",
    "blockFrames": "-1~0",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "3+4, 1 (four spins)",
    "hitLevel": "h",
    "damage": "31",
    "startupFrames": "19~20 (135~)",
    "blockFrames": "-1~0",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "3+4, 1 (five spins)",
    "hitLevel": "h",
    "damage": "31",
    "startupFrames": "19~20 (167~)",
    "blockFrames": "-1~0",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "3+4, 2 (one spin)",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "11~12 (35)",
    "blockFrames": "-9~-8",
    "hitFrames": "+12~+13s",
    "counterHitFrames": "+12~+13s",
    "notes": ""
  },
  {
    "command": "3+4, 2 (two spins)",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "11~12 (67)",
    "blockFrames": "-2~-1",
    "hitFrames": "+12~+13s",
    "counterHitFrames": "+12~+13s",
    "notes": ""
  },
  {
    "command": "3+4, 2 (three spins)",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "11~12 (99)",
    "blockFrames": "0~+1s",
    "hitFrames": "+12~+13s",
    "counterHitFrames": "+12~+13s",
    "notes": ""
  },
  {
    "command": "3+4, 2 (four spins)",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "11~12 (131)",
    "blockFrames": "0~+1s",
    "hitFrames": "+12~+13s",
    "counterHitFrames": "+12~+13s",
    "notes": ""
  },
  {
    "command": "3+4, 2 (five spins)",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "11~12 (163)",
    "blockFrames": "0~+1s",
    "hitFrames": "+12~+13s",
    "counterHitFrames": "+12~+13s",
    "notes": ""
  },
  {
    "command": "3+4, 3 (one spin)",
    "hitLevel": "m (TJ)",
    "damage": "23",
    "startupFrames": "22~23 (46~) js14~",
    "blockFrames": "-5~-4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3 (two spins)",
    "hitLevel": "m (TJ)",
    "damage": "27",
    "startupFrames": "22~23 (74~) js14~",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3 (three spins)",
    "hitLevel": "m (TJ)",
    "damage": "34",
    "startupFrames": "22~23 (106~) js14~",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3 (four spins)",
    "hitLevel": "m (TJ)",
    "damage": "34",
    "startupFrames": "22~23 (138~) js14~",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3 (five spins)",
    "hitLevel": "m (TJ)",
    "damage": "34",
    "startupFrames": "22~23 (170~) js14~",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3, 2+3 (Close)",
    "hitLevel": "m (TJ), (throw)",
    "damage": "20,15",
    "startupFrames": "d js10~",
    "blockFrames": "-17~-13s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 3, 2+3",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "10~d",
    "blockFrames": "-12~+5s",
    "hitFrames": "-15~+2s",
    "counterHitFrames": "-15~+2s",
    "notes": ""
  },
  {
    "command": "3+4, 4 (one spin)",
    "hitLevel": "h",
    "damage": "40",
    "startupFrames": "17~18 (41~)",
    "blockFrames": "+8~+9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4, 4 (two spins)",
    "hitLevel": "h!",
    "damage": "42",
    "startupFrames": "17~18 (73~)",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4, 4 (three spins)",
    "hitLevel": "h!",
    "damage": "52",
    "startupFrames": "17~18 (105~)",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4, 4 (four spins)",
    "hitLevel": "h!",
    "damage": "52",
    "startupFrames": "17~18 (137~)",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4, 4 (five spins)",
    "hitLevel": "h!",
    "damage": "52",
    "startupFrames": "17~18 (169~)",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4, d/f+4 (one spin)",
    "hitLevel": "m",
    "damage": "30",
    "startupFrames": "17~19 (41~)",
    "blockFrames": "-17~-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, d/f+4 (two spins)",
    "hitLevel": "m",
    "damage": "36",
    "startupFrames": "17~19 (73~)",
    "blockFrames": "+8~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, d/f+4 (three spins)",
    "hitLevel": "m",
    "damage": "45",
    "startupFrames": "17~19 (105~)",
    "blockFrames": "+8~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, d/f+4 (four spins)",
    "hitLevel": "m",
    "damage": "45",
    "startupFrames": "17~19 (137~)",
    "blockFrames": "+8~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, d/f+4 (five spins)",
    "hitLevel": "m",
    "damage": "45",
    "startupFrames": "17~19 (169~)",
    "blockFrames": "+8~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "3+4, 1+4 or 3+4, 2+3",
    "hitLevel": "h(Throw)",
    "damage": "20",
    "startupFrames": "12(36~)",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "s",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F+1",
    "hitLevel": "l (TC)",
    "damage": "20",
    "startupFrames": "32~34s (36~) cs1~",
    "blockFrames": "-12~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F+4",
    "hitLevel": "m (TJ)",
    "damage": "21",
    "startupFrames": "15~16 (19~)",
    "blockFrames": "-9~-8",
    "hitFrames": "CS",
    "counterHitFrames": "hKZD",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F+1+2",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "20~23 (24~)",
    "blockFrames": "-5~-2s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F+2+3",
    "hitLevel": "h(Throw)",
    "damage": "25",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, n, d, D/F+1+4",
    "hitLevel": "h(Throw)",
    "damage": "20",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "f, n, d, d/f, n",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "12",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "3",
    "hitLevel": "h",
    "damage": "33",
    "startupFrames": "17",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "27",
    "startupFrames": "13",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "f+1",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "10",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "15(16~)",
    "blockFrames": "-9",
    "hitFrames": "+1",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "d/b or d+1",
    "hitLevel": "Sm (TC)",
    "damage": "6",
    "startupFrames": "10 RC",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d+2",
    "hitLevel": "Sm (TC)",
    "damage": "10",
    "startupFrames": "11 RC",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l (TC)",
    "damage": "9",
    "startupFrames": "14 RC",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+1",
    "hitLevel": "Sm (TC)",
    "damage": "6",
    "startupFrames": "10 RC",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+2",
    "hitLevel": "Sm (TC)",
    "damage": "10",
    "startupFrames": "11 RC",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "FC+3",
    "hitLevel": "l (TC)",
    "damage": "16",
    "startupFrames": "18 RC",
    "blockFrames": "-16",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+4",
    "hitLevel": "l (TC)",
    "damage": "13",
    "startupFrames": "14 RC",
    "blockFrames": "-13",
    "hitFrames": "-2",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "10~11",
    "blockFrames": "-4~-3",
    "hitFrames": "+3~+4",
    "counterHitFrames": "+3~+4",
    "notes": ""
  },
  {
    "command": "WS+3",
    "hitLevel": "h",
    "damage": "37",
    "startupFrames": "16",
    "blockFrames": "0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u or u/f+1",
    "hitLevel": "m (TJ)",
    "damage": "16",
    "startupFrames": "18",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "u/b or u+3",
    "hitLevel": "m (TJ)",
    "damage": "33",
    "startupFrames": "23",
    "blockFrames": "-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+1",
    "hitLevel": "h",
    "damage": "9",
    "startupFrames": "10(11~)",
    "blockFrames": "+1",
    "hitFrames": "+8",
    "counterHitFrames": "+8",
    "notes": ""
  },
  {
    "command": "SS+3",
    "hitLevel": "h",
    "damage": "33",
    "startupFrames": "17(18~)",
    "blockFrames": "-14",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "h",
    "damage": "27",
    "startupFrames": "13(14~)",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "BT 1 or 2",
    "hitLevel": "h",
    "damage": "20",
    "startupFrames": "8",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "BT 4",
    "hitLevel": "h",
    "damage": "33",
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
    "startupFrames": "10s",
    "blockFrames": "-2",
    "hitFrames": "+9",
    "counterHitFrames": "+9",
    "notes": ""
  },
  {
    "command": "BT d+3",
    "hitLevel": "l",
    "damage": "12",
    "startupFrames": "10s",
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
    "command": "in rage d/b+1+2",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "20~21",
    "blockFrames": "+8~+9s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art"
  }
];