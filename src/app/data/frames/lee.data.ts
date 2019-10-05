import { CharacterFrameData } from "../framedata.interface";

export const Lee: CharacterFrameData[] = [
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
    "damage": "7,9",
    "startupFrames": "10",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "1, 2, 2",
    "hitLevel": "h, h, m",
    "damage": "7,9,14",
    "startupFrames": "10",
    "blockFrames": "-13~-12",
    "hitFrames": "-2~-1",
    "counterHitFrames": "-2~-1",
    "notes": ""
  },
  {
    "command": "1, 2, 2, 3",
    "hitLevel": "h, h, m, h",
    "damage": "7,9,14,23",
    "startupFrames": "10",
    "blockFrames": "-3~-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "1, 2, 2, 3, 4",
    "hitLevel": "h, h, m, h, (HMS)",
    "damage": "7,9,14,23",
    "startupFrames": "10",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "1, 2, 4",
    "hitLevel": "h, h, m",
    "damage": "7,9,10",
    "startupFrames": "10",
    "blockFrames": "-12",
    "hitFrames": "-1",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "1, 2, 4, 3",
    "hitLevel": "h, h, m, (HMS)",
    "damage": "7,9,10",
    "startupFrames": "10",
    "blockFrames": "-14",
    "hitFrames": "-3",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "1, 2, 4 (Hold long as possible)",
    "hitLevel": "h, h, m",
    "damage": "7,9,20",
    "startupFrames": "10",
    "blockFrames": "-7",
    "hitFrames": "0",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "1, 2, f, n",
    "hitLevel": "h, h, (Special) (TC)(MS)",
    "damage": "7,9",
    "startupFrames": "10",
    "blockFrames": "-2",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "1, 3",
    "hitLevel": "h, h",
    "damage": "7,5",
    "startupFrames": "10",
    "blockFrames": "-11",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "1, 3:3",
    "hitLevel": "h, h, m",
    "damage": "7,5,4",
    "startupFrames": "10",
    "blockFrames": "-10",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "1, 3:3:3",
    "hitLevel": "h, h, m, h",
    "damage": "7,5,4,12",
    "startupFrames": "10",
    "blockFrames": "-18",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
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
    "hitLevel": "h, h",
    "damage": "10,8",
    "startupFrames": "10",
    "blockFrames": "-5~-3",
    "hitFrames": "+6~+8",
    "counterHitFrames": "+6~+8",
    "notes": ""
  },
  {
    "command": "2, 1, 3+4",
    "hitLevel": "h, h, (HMS)",
    "damage": "10,8",
    "startupFrames": "10",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "2, 1, 1",
    "hitLevel": "h, h, m",
    "damage": "10,8,18",
    "startupFrames": "10s",
    "blockFrames": "-12~-11",
    "hitFrames": "+3~+4",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "2, 1, 3",
    "hitLevel": "h, h, h",
    "damage": "10,8,24",
    "startupFrames": "10",
    "blockFrames": "-4~-2",
    "hitFrames": "KND",
    "counterHitFrames": "Tail spin (3rd hit)",
    "notes": "Tail spin"
  },
  {
    "command": "2, 1, 4",
    "hitLevel": "h, h, l (TC)",
    "damage": "10,8,18",
    "startupFrames": "cs16~",
    "blockFrames": "-16~-14",
    "hitFrames": "0~+2",
    "counterHitFrames": "+10~+12",
    "notes": ""
  },
  {
    "command": "2, 2",
    "hitLevel": "h, m",
    "damage": "10,14",
    "startupFrames": "16~",
    "blockFrames": "-13~-12",
    "hitFrames": "-2~-1",
    "counterHitFrames": "-2~-1",
    "notes": ""
  },
  {
    "command": "2, 2, 3",
    "hitLevel": "h, m, h",
    "damage": "10,14,23",
    "startupFrames": "16~",
    "blockFrames": "-3~-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "2, 2, 3, 4",
    "hitLevel": "h, m, h, (HMS)",
    "damage": "10,14,23",
    "startupFrames": "16~",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "14",
    "blockFrames": "-8",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "3, 4",
    "hitLevel": "m, (HMS)",
    "damage": "16",
    "startupFrames": "14",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "3, 3",
    "hitLevel": "m, h",
    "damage": "16,18",
    "startupFrames": "14",
    "blockFrames": "-10",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "3~3",
    "hitLevel": "h",
    "damage": "18",
    "startupFrames": "30",
    "blockFrames": "-10",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "3~3 hit or guard 4",
    "hitLevel": "(h, )h(Throw)",
    "damage": "(18,)15,5",
    "startupFrames": "30",
    "blockFrames": "Throw(KND)",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "Throw(KND)",
    "notes": ""
  },
  {
    "command": "4",
    "hitLevel": "h",
    "damage": "16",
    "startupFrames": "11",
    "blockFrames": "-9",
    "hitFrames": "+7",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "4, 3",
    "hitLevel": "h, h",
    "damage": "16,14",
    "startupFrames": "11",
    "blockFrames": "-14",
    "hitFrames": "-3",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "4, 3, 3",
    "hitLevel": "h, h, m",
    "damage": "16,14,20",
    "startupFrames": "11",
    "blockFrames": "-13~-11",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4, 3, 4",
    "hitLevel": "h, h, m (TJ)",
    "damage": "16,14,25",
    "startupFrames": "js22~",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4, 4",
    "hitLevel": "h, h",
    "damage": "16,6",
    "startupFrames": "22~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "4, 4, 4",
    "hitLevel": "h, h, h",
    "damage": "16,6,8",
    "startupFrames": "22~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "4, u or u/f+3",
    "hitLevel": "h, m (TJ)",
    "damage": "16,25",
    "startupFrames": "22~a",
    "blockFrames": "-1~+1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "4, u or u/f+3, f",
    "hitLevel": "h, m (Mist step)",
    "damage": "16,25",
    "startupFrames": "22~a",
    "blockFrames": "-27",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "1+2",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "21~22s",
    "blockFrames": "-4~-3",
    "hitFrames": "+3~+4",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "1+2, 3+4",
    "hitLevel": "m (HMS)",
    "damage": "20",
    "startupFrames": "21~22s",
    "blockFrames": "-4~-3",
    "hitFrames": "+3~+4",
    "counterHitFrames": "KND",
    "notes": "Homing"
  },
  {
    "command": "f+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "14~15",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "f+2, 1",
    "hitLevel": "m, h",
    "damage": "12,24",
    "startupFrames": "14~15",
    "blockFrames": "-10~-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3",
    "hitLevel": "m",
    "damage": "6",
    "startupFrames": "15",
    "blockFrames": "-18",
    "hitFrames": "-7",
    "counterHitFrames": "-7",
    "notes": ""
  },
  {
    "command": "f+3, 3",
    "hitLevel": "m, m",
    "damage": "6,3",
    "startupFrames": "15",
    "blockFrames": "-18",
    "hitFrames": "-7",
    "counterHitFrames": "-7",
    "notes": ""
  },
  {
    "command": "f+3, 3, 3",
    "hitLevel": "m, m, h",
    "damage": "6,3,3",
    "startupFrames": "15",
    "blockFrames": "-18~-17",
    "hitFrames": "-7~-6",
    "counterHitFrames": "-7~-6",
    "notes": ""
  },
  {
    "command": "f+3, 3, 3, 3",
    "hitLevel": "m, m, h, h",
    "damage": "6,3,3,3",
    "startupFrames": "15",
    "blockFrames": "-18~-17",
    "hitFrames": "-7~-6",
    "counterHitFrames": "-7~-6",
    "notes": ""
  },
  {
    "command": "f+3, 3, 3, 3, 3",
    "hitLevel": "m, m, h, h, h",
    "damage": "6,3,3,3,3",
    "startupFrames": "15",
    "blockFrames": "-18~-17",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3, 3, 3, 3, 3, 4",
    "hitLevel": "m, m, h, h, h, h",
    "damage": "6,3,3,3,3,20",
    "startupFrames": "15",
    "blockFrames": "-4~-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f+3, 3, 3, 3, 3, 4, 3",
    "hitLevel": "m, m, h, h, h, h, (HMS)",
    "damage": "6,3,3,3,3,20",
    "startupFrames": "15",
    "blockFrames": "-7~-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "f+4",
    "hitLevel": "h",
    "damage": "13",
    "startupFrames": "11",
    "blockFrames": "-7",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "f+4, 1",
    "hitLevel": "h, h",
    "damage": "13, 16",
    "startupFrames": "11",
    "blockFrames": "-2",
    "hitFrames": "+13",
    "counterHitFrames": "+13",
    "notes": ""
  },
  {
    "command": "f+4, 3",
    "hitLevel": "h, m",
    "damage": "13,18",
    "startupFrames": "11",
    "blockFrames": "-8~-6",
    "hitFrames": "+6~+8s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+4, 3, 4",
    "hitLevel": "h, m, (HMS)",
    "damage": "17,24",
    "startupFrames": "11",
    "blockFrames": "-4~-2",
    "hitFrames": "+10~+12s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+1+2",
    "hitLevel": "hh",
    "damage": "10,24",
    "startupFrames": "13,28~29",
    "blockFrames": "-13~-12",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f+3+4",
    "hitLevel": "mm (TJ)",
    "damage": "10,20",
    "startupFrames": "30~32, 34~36 js14~33",
    "blockFrames": "+4~+6s",
    "hitFrames": "+8~+10s",
    "counterHitFrames": "+8~+10s",
    "notes": ""
  },
  {
    "command": "f+3+4 (Second hit miss)",
    "hitLevel": "m",
    "damage": "10",
    "startupFrames": "30~32s js14~33",
    "blockFrames": "-14~-12s",
    "hitFrames": "-3~-1s",
    "counterHitFrames": "-3~-1s",
    "notes": ""
  },
  {
    "command": "d/f+1",
    "hitLevel": "m",
    "damage": "13",
    "startupFrames": "13~14",
    "blockFrames": "-1~0",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "d/f+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "15~16",
    "blockFrames": "-7~-6",
    "hitFrames": "Launch (JG?)(+4a)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d/f+3",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "15~16",
    "blockFrames": "-8~-7",
    "hitFrames": "+3~+4",
    "counterHitFrames": "+3~+4",
    "notes": ""
  },
  {
    "command": "d/f+3, 2",
    "hitLevel": "m, h",
    "damage": "14,11",
    "startupFrames": "15~16",
    "blockFrames": "-6~-5",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "d/f+3, 2, 3",
    "hitLevel": "m, h, m",
    "damage": "14,11,23",
    "startupFrames": "15~16",
    "blockFrames": "-16~-15",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "d/f+4",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "13~14",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "d/f+4, 3",
    "hitLevel": "m, (HMS)",
    "damage": "16",
    "startupFrames": "13~14",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "d/f+1+2",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "20~21",
    "blockFrames": "-9~-8",
    "hitFrames": "-2~-1",
    "counterHitFrames": "-2~-1",
    "notes": ""
  },
  {
    "command": "d/f+1+2, 3",
    "hitLevel": "m, h",
    "damage": "18,23",
    "startupFrames": "20~21",
    "blockFrames": "-3~-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d/f+1+2, 3, 4",
    "hitLevel": "m, h, (HMS)",
    "damage": "18,23",
    "startupFrames": "20~21",
    "blockFrames": "-9~-7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "d+2",
    "hitLevel": "m",
    "damage": "18",
    "startupFrames": "18~19",
    "blockFrames": "-6~-5",
    "hitFrames": "+8~+9",
    "counterHitFrames": "+8~+9",
    "notes": ""
  },
  {
    "command": "d+3",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "16s cs6~",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+3, 4",
    "hitLevel": "l (TC), (HMS)",
    "damage": "15",
    "startupFrames": "16s cs6~",
    "blockFrames": "-15",
    "hitFrames": "-1",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+4",
    "hitLevel": "l",
    "damage": "7",
    "startupFrames": "12",
    "blockFrames": "-13",
    "hitFrames": "-14",
    "counterHitFrames": "-2",
    "notes": ""
  },
  {
    "command": "d+4, n+4",
    "hitLevel": "l, h",
    "damage": "7,16",
    "startupFrames": "12",
    "blockFrames": "-9",
    "hitFrames": "+2",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "d+4, n+4~3j",
    "hitLevel": "l, h! (TJ)",
    "damage": "7,60",
    "startupFrames": "12a",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "D+4, 4",
    "hitLevel": "l, l",
    "damage": "7,8",
    "startupFrames": "12",
    "blockFrames": "-15",
    "hitFrames": "-16",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "D+4, 4, 4",
    "hitLevel": "l, l, l",
    "damage": "7,8,5",
    "startupFrames": "12",
    "blockFrames": "-15",
    "hitFrames": "-16",
    "counterHitFrames": "-4",
    "notes": ""
  },
  {
    "command": "D+4, 4, 4, 4",
    "hitLevel": "l, l, l, m",
    "damage": "7,8,5,21",
    "startupFrames": "12",
    "blockFrames": "-20~-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "D+4, 4, 4, 4, 3",
    "hitLevel": "l, l, l, m, (HMS)",
    "damage": "7,8,5,21",
    "startupFrames": "12",
    "blockFrames": "-11~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "D+4, 4, 4, 4, 3, d/b (Cancel)",
    "hitLevel": "l, l, l, m, (HMS)",
    "damage": "7,8,5,21",
    "startupFrames": "12s",
    "blockFrames": "-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+3+4",
    "hitLevel": "h! (TJ)",
    "damage": "60",
    "startupFrames": "60a cs25~44 js45~",
    "blockFrames": "KND",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d+3+4, 3+4 (Cancel)",
    "hitLevel": "(HMS)",
    "damage": "",
    "startupFrames": "s",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "d/b+3",
    "hitLevel": "l",
    "damage": "13",
    "startupFrames": "20~21",
    "blockFrames": "-12~-11",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "d/b+1+2",
    "hitLevel": "!, !",
    "damage": "20,30",
    "startupFrames": "76,90",
    "blockFrames": "CS",
    "hitFrames": "CS",
    "counterHitFrames": "CS",
    "notes": ""
  },
  {
    "command": "d/b+3+4",
    "hitLevel": "l?",
    "damage": "17",
    "startupFrames": "23~25",
    "blockFrames": "-13~-11",
    "hitFrames": "+4~+6",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1",
    "hitLevel": "h",
    "damage": "8",
    "startupFrames": "15",
    "blockFrames": "0",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "b+1, 1",
    "hitLevel": "h, m",
    "damage": "8,6",
    "startupFrames": "15",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "b+1, 1, 2",
    "hitLevel": "h, m, h",
    "damage": "8,6,15",
    "startupFrames": "15",
    "blockFrames": "-11",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "b+1, 1, 3+4",
    "hitLevel": "h, m, (HMS)",
    "damage": "8,6",
    "startupFrames": "15",
    "blockFrames": "-1",
    "hitFrames": "+10",
    "counterHitFrames": "+10",
    "notes": ""
  },
  {
    "command": "b+1, 1~f, n (Cancel)",
    "hitLevel": "h, (MS)",
    "damage": "8",
    "startupFrames": "15",
    "blockFrames": "-5",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "b+1:1",
    "hitLevel": "h, m",
    "damage": "12,6",
    "startupFrames": "15",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "b+1:1, 2",
    "hitLevel": "h, m, h",
    "damage": "12,6,23",
    "startupFrames": "15",
    "blockFrames": "-6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1:1, 3+4",
    "hitLevel": "h, m, (HMS)",
    "damage": "12,6",
    "startupFrames": "15",
    "blockFrames": "-1",
    "hitFrames": "+10",
    "counterHitFrames": "+10",
    "notes": ""
  },
  {
    "command": "b+1:1~f, n (Cancel)",
    "hitLevel": "h, (MS)",
    "damage": "12",
    "startupFrames": "15",
    "blockFrames": "-5",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "b+2",
    "hitLevel": "h",
    "damage": "13",
    "startupFrames": "14",
    "blockFrames": "-5",
    "hitFrames": "+1",
    "counterHitFrames": "+1",
    "notes": ""
  },
  {
    "command": "b+2, f, n",
    "hitLevel": "h, (MS)",
    "damage": "13",
    "startupFrames": "14",
    "blockFrames": "-1",
    "hitFrames": "+5",
    "counterHitFrames": "+5",
    "notes": ""
  },
  {
    "command": "b+2, 4",
    "hitLevel": "h, h",
    "damage": "13,12",
    "startupFrames": "14",
    "blockFrames": "-8~-7",
    "hitFrames": "-6~-5",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2, 4, 3+4",
    "hitLevel": "h, h, (HMS)",
    "damage": "13,12",
    "startupFrames": "14",
    "blockFrames": "-10~-9",
    "hitFrames": "-8~-7",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+2, 4, 3",
    "hitLevel": "h, h, h (TJ)",
    "damage": "13,12,21",
    "startupFrames": "js13~",
    "blockFrames": "-3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "b+3",
    "hitLevel": "l",
    "damage": "9",
    "startupFrames": "15",
    "blockFrames": "-14",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "b+3, 3",
    "hitLevel": "l, h",
    "damage": "9,15",
    "startupFrames": "15",
    "blockFrames": "-12",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "b+3, 3, f",
    "hitLevel": "l, h, (MS)",
    "damage": "9,15",
    "startupFrames": "15",
    "blockFrames": "-7",
    "hitFrames": "+2",
    "counterHitFrames": "+2",
    "notes": ""
  },
  {
    "command": "b+4",
    "hitLevel": "m",
    "damage": "22",
    "startupFrames": "20~22",
    "blockFrames": "-3~-1",
    "hitFrames": "+7~+9s (KND)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+4, 3",
    "hitLevel": "m, (HMS)",
    "damage": "22",
    "startupFrames": "20~22",
    "blockFrames": "-2~0",
    "hitFrames": "+8~+10s (KND)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "b+1+2",
    "hitLevel": "Absorbs 1 h/m hit",
    "damage": "",
    "startupFrames": "20~22",
    "blockFrames": "",
    "hitFrames": "+7b",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "b+1+2(when done) 4(When parry successful)",
    "hitLevel": "(Special), m",
    "damage": "30",
    "startupFrames": "20",
    "blockFrames": "",
    "hitFrames": "KND",
    "counterHitFrames": "Tail spin",
    "notes": ""
  },
  {
    "command": "b+3+4",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "20 pc8~19",
    "blockFrames": "-15",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Power crush"
  },
  {
    "command": "u/b, b",
    "hitLevel": "(Special) (TJ), (HMS)",
    "damage": "",
    "startupFrames": "20 8~19",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u/b+3",
    "hitLevel": "m",
    "damage": "20",
    "startupFrames": "18~22 js17~",
    "blockFrames": "-13~-9",
    "hitFrames": "KND",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "u+3",
    "hitLevel": "(Special) (TJ)",
    "damage": "",
    "startupFrames": "a",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u+3, D",
    "hitLevel": "(Special) (TJ)",
    "damage": "",
    "startupFrames": "as",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u+3, 3+4",
    "hitLevel": "(Special) (TJ), (HMS)",
    "damage": "",
    "startupFrames": "a",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "u/f+3",
    "hitLevel": "m (TJ)",
    "damage": "12",
    "startupFrames": "25~26 js12~",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "u/f+3, 1",
    "hitLevel": "m (TJ), m",
    "damage": "12,18",
    "startupFrames": "s js1~4",
    "blockFrames": "-12~-11",
    "hitFrames": "+3~+4",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3, 4",
    "hitLevel": "m (TJ), h",
    "damage": "12,23",
    "startupFrames": "js1~4",
    "blockFrames": "-3~-1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
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
    "command": "u/f+3+4",
    "hitLevel": "h (TJ)",
    "damage": "27",
    "startupFrames": "22~24 js9~",
    "blockFrames": "+5~+7",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "u/f+3+4, 3+4",
    "hitLevel": "h (TJ), (HMS)",
    "damage": "32",
    "startupFrames": "22~24 js9~",
    "blockFrames": "+8~+10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+3",
    "hitLevel": "m",
    "damage": "26",
    "startupFrames": "14",
    "blockFrames": "-11~-10",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, F+4",
    "hitLevel": "h",
    "damage": "22",
    "startupFrames": "16~17 (17~) cs5~12",
    "blockFrames": "-5~-4",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "d, D/B+4",
    "hitLevel": "m",
    "damage": "24",
    "startupFrames": "22~24 (24~)",
    "blockFrames": "-17~-15",
    "hitFrames": "Launch(JG?)",
    "counterHitFrames": "Launch(JG?)",
    "notes": ""
  },
  {
    "command": "b, B+4",
    "hitLevel": "h",
    "damage": "23",
    "startupFrames": "18~21 (19~)",
    "blockFrames": "+2~+5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "b, B+4, 3",
    "hitLevel": "h, (HMS)",
    "damage": "23",
    "startupFrames": "8~21 (20~)",
    "blockFrames": "0~+3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Tail spin"
  },
  {
    "command": "f, f, f+3 or WR+3",
    "hitLevel": "m",
    "damage": "14",
    "startupFrames": "14~15 (17~) js9~",
    "blockFrames": "-9~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+3, 4",
    "hitLevel": "m, m",
    "damage": "14,26",
    "startupFrames": "js1~",
    "blockFrames": "+3~+5",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, f, f+3, 4, 3+4",
    "hitLevel": "m, m, (HMS)",
    "damage": "14,26",
    "startupFrames": "js1~",
    "blockFrames": "+4~+6",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+2",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "14~16",
    "blockFrames": "-8~-6",
    "hitFrames": "+3~+5",
    "counterHitFrames": "+3~+5",
    "notes": ""
  },
  {
    "command": "WS+2, 3",
    "hitLevel": "m, m",
    "damage": "12,24",
    "startupFrames": "14~16",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "WS+2, 4",
    "hitLevel": "m, h",
    "damage": "12,23",
    "startupFrames": "14~16",
    "blockFrames": "-6~-5",
    "hitFrames": "+16~+17kg",
    "counterHitFrames": "+16~+17kg",
    "notes": "Tail spin"
  },
  {
    "command": "WS+3",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "10~12",
    "blockFrames": "-21~-19",
    "hitFrames": "-10~-8",
    "counterHitFrames": "-10~-8",
    "notes": ""
  },
  {
    "command": "WS+3, 3",
    "hitLevel": "m, m",
    "damage": "16,11",
    "startupFrames": "10~12",
    "blockFrames": "-15~-13",
    "hitFrames": "-4~-2s",
    "counterHitFrames": "-4~-2s",
    "notes": ""
  },
  {
    "command": "WS+3, 3, 4",
    "hitLevel": "m, m (HMS)",
    "damage": "16,11",
    "startupFrames": "10~12",
    "blockFrames": "-15~-13",
    "hitFrames": "-4~-2s",
    "counterHitFrames": "-4~-2s",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D+3",
    "hitLevel": "m, m, l",
    "damage": "16,11,8",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "-8",
    "counterHitFrames": "-8",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D+3, n+3",
    "hitLevel": "m, m, l, m",
    "damage": "16,11,8,10",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "-8",
    "counterHitFrames": "-8",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D+3, n+3, 3",
    "hitLevel": "m, m, l, m, h",
    "damage": "16,11,8,10,10",
    "startupFrames": "10~12",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D/F+3",
    "hitLevel": "m, m, m",
    "damage": "16,11,10",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "-8",
    "counterHitFrames": "-8",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D/F+3, n+3",
    "hitLevel": "m, m, m, h",
    "damage": "16,11,10,10",
    "startupFrames": "10~12",
    "blockFrames": "-16",
    "hitFrames": "-5",
    "counterHitFrames": "-5",
    "notes": ""
  },
  {
    "command": "WS+3, 3, D/F+3, n+3, 3",
    "hitLevel": "m, m, m, h, m",
    "damage": "16,11,10,10,10",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "-8",
    "counterHitFrames": "-8",
    "notes": ""
  },
  {
    "command": "In+f-Kick D+3, ,,",
    "hitLevel": "l",
    "damage": "10",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "-8",
    "counterHitFrames": "-8",
    "notes": ""
  },
  {
    "command": "In+f-Kick U+3, ,,",
    "hitLevel": "m",
    "damage": "15",
    "startupFrames": "10~12",
    "blockFrames": "-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "WS+4",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "11~12",
    "blockFrames": "-6~-5",
    "hitFrames": "+5~+6",
    "counterHitFrames": "+5~+6",
    "notes": ""
  },
  {
    "command": "WS+4, 3",
    "hitLevel": "m, (HMS)",
    "damage": "16",
    "startupFrames": "11~12",
    "blockFrames": "-9~-8",
    "hitFrames": "+2~+3",
    "counterHitFrames": "+2~+3",
    "notes": ""
  },
  {
    "command": "FC+d/f+4",
    "hitLevel": "l (TC)",
    "damage": "17",
    "startupFrames": "16~17s cs1~",
    "blockFrames": "-14~-13",
    "hitFrames": "-3s~-2s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+d/f+4, 3",
    "hitLevel": "l (TC), (HMS)",
    "damage": "17",
    "startupFrames": "16~17s cs1~",
    "blockFrames": "-12~-11",
    "hitFrames": "-1s~0s",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "15",
    "startupFrames": "18~28s (18~) js9~",
    "blockFrames": "-17~-7",
    "hitFrames": "-6~+4",
    "counterHitFrames": "-6~+4",
    "notes": ""
  },
  {
    "command": "FC+u+4",
    "hitLevel": "m (TJ)",
    "damage": "22",
    "startupFrames": "18~28s (18~) js9~",
    "blockFrames": "-17~-7",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "FC+u/f+4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "18~28s (18~) js9~",
    "blockFrames": "-17~-7",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "FC+u/b or u or u/f+4, 3",
    "hitLevel": "m (TJ), (HMS)",
    "damage": "(15or22or)25",
    "startupFrames": "18~28s (18~) js9~",
    "blockFrames": "-17~-7",
    "hitFrames": "Launch (JG?) (-6~+4)",
    "counterHitFrames": "Launch (JG?) (-6~+4)",
    "notes": ""
  },
  {
    "command": "FC+u or U/F+4",
    "hitLevel": "m (TJ)",
    "damage": "28or30",
    "startupFrames": "14~17 js9~",
    "blockFrames": "-31~-28",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+u/b or u or U/F+4, d",
    "hitLevel": "m",
    "damage": "33or37or40",
    "startupFrames": "14~16s js9~",
    "blockFrames": "-31~-28",
    "hitFrames": "KND (-20~-17)",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+u/b or u or U/F+3+4",
    "hitLevel": "mm (TJ)",
    "damage": "30,20",
    "startupFrames": "46~49, 56~58d js9~",
    "blockFrames": "-4~-2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+u/b or u or U/F+3+4 (First hit only)",
    "hitLevel": "m (TJ)",
    "damage": "30",
    "startupFrames": "46~49d js9~",
    "blockFrames": "-24~-21",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "FC+d/f, d, D/F+3",
    "hitLevel": "l (TC)",
    "damage": "22",
    "startupFrames": "16~20d (19~) cs1~15 js16~",
    "blockFrames": "-23~-19",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "SSR+3+4",
    "hitLevel": "m",
    "damage": "28",
    "startupFrames": "20~23 (29~)",
    "blockFrames": "-11~-8",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "SSR+3+4, 4",
    "hitLevel": "m, (HMS)",
    "damage": "28",
    "startupFrames": "20~23 (29~)",
    "blockFrames": "-19~-16",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "SSL+3+4",
    "hitLevel": "h",
    "damage": "25",
    "startupFrames": "17~20 (25~)",
    "blockFrames": "-2~+1",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "SSL+3+4, 3",
    "hitLevel": "h, (HMS)",
    "damage": "25",
    "startupFrames": "17~20 (25~)",
    "blockFrames": "-5~-2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Tail spin"
  },
  {
    "command": "3+4 or From certain moves (to HMS)",
    "hitLevel": "(HMS)",
    "damage": "",
    "startupFrames": "RC",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS d or u",
    "hitLevel": "(HMS)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS f",
    "hitLevel": "(HMS)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS d/b or D (Cancel)",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "RC",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS b (Cancel)",
    "hitLevel": "(Special)",
    "damage": "",
    "startupFrames": "",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS 1",
    "hitLevel": "h (HMS)",
    "damage": "10",
    "startupFrames": "12",
    "blockFrames": "0",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "HMS 1, 1, …",
    "hitLevel": "h, h HMS)",
    "damage": "10,10, …",
    "startupFrames": "12",
    "blockFrames": "-1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "HMS 1, 1, …, f, n (Cancel)",
    "hitLevel": "(MS)",
    "damage": "10,",
    "startupFrames": "12s",
    "blockFrames": "-3",
    "hitFrames": "+4",
    "counterHitFrames": "+4",
    "notes": ""
  },
  {
    "command": "HMS 1, 4",
    "hitLevel": "h, m",
    "damage": "10,17",
    "startupFrames": "12",
    "blockFrames": "-8",
    "hitFrames": "0",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "HMS 1, 4, 3",
    "hitLevel": "h, m (HMS)",
    "damage": "10,15",
    "startupFrames": "12",
    "blockFrames": "-8",
    "hitFrames": "0",
    "counterHitFrames": "0",
    "notes": ""
  },
  {
    "command": "HMS 2",
    "hitLevel": "m",
    "damage": "23",
    "startupFrames": "19~20",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch",
    "counterHitFrames": "Launch",
    "notes": ""
  },
  {
    "command": "HMS 3",
    "hitLevel": "h",
    "damage": "21",
    "startupFrames": "17~19 pc8~16",
    "blockFrames": "-4~-2",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Homing, Power crush, Tail spin"
  },
  {
    "command": "HMS 3 Hit when close",
    "hitLevel": "h, (throw)",
    "damage": "21(,20)",
    "startupFrames": "17~19 8~16",
    "blockFrames": "",
    "hitFrames": "Throw(KND)",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "HMS 4",
    "hitLevel": "l (TC)",
    "damage": "30",
    "startupFrames": "24~26s cs6~",
    "blockFrames": "-26",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "HMS 1+2",
    "hitLevel": "mm",
    "damage": "10,15",
    "startupFrames": "15,26~27",
    "blockFrames": "-7~-6",
    "hitFrames": "+6~+7",
    "counterHitFrames": "+6~+7",
    "notes": ""
  },
  {
    "command": "HMS u/f+3",
    "hitLevel": "m (TJ)",
    "damage": "24",
    "startupFrames": "20~22 js9~",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Wall bounce"
  },
  {
    "command": "HMS u/f+3, D",
    "hitLevel": "m (TJ)",
    "damage": "24",
    "startupFrames": "20~22s js9~",
    "blockFrames": "-9",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "HMS u/f+4",
    "hitLevel": "m (TJ)",
    "damage": "20",
    "startupFrames": "25~29 js16~",
    "blockFrames": "-8~-4s",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "f, n or HMS f (to MS)",
    "hitLevel": "(Special) (TC)(MS)",
    "damage": "",
    "startupFrames": "25~29 16~",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "MS 3",
    "hitLevel": "m (TJ)",
    "damage": "10",
    "startupFrames": "15~16 (17~) js9~",
    "blockFrames": "-12~-11",
    "hitFrames": "-1~0",
    "counterHitFrames": "-1~0",
    "notes": ""
  },
  {
    "command": "MS 3, 4",
    "hitLevel": "m (TJ), m (TJ)",
    "damage": "10,10",
    "startupFrames": "js1~",
    "blockFrames": "-13~-12",
    "hitFrames": "Launch (JG?)",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "MS 3+4",
    "hitLevel": "l (TJ)",
    "damage": "17",
    "startupFrames": "29~33a,d (31~) js6~23",
    "blockFrames": "-35~-31",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "MS etc, ,",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "29~33, (31~) 6~23",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "MS b, n",
    "hitLevel": "(Sway)",
    "damage": "",
    "startupFrames": "(s)",
    "blockFrames": "",
    "hitFrames": "",
    "counterHitFrames": "",
    "notes": ""
  },
  {
    "command": "Sway 4",
    "hitLevel": "l (TC)",
    "damage": "18",
    "startupFrames": "21~22 cs1~",
    "blockFrames": "-13~-12",
    "hitFrames": "+3~+4",
    "counterHitFrames": "KND",
    "notes": ""
  },
  {
    "command": "Sway n command",
    "hitLevel": "",
    "damage": "",
    "startupFrames": "21~22 1~",
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
    "command": "d/b or d+1",
    "hitLevel": "Sm (TC)",
    "damage": "5",
    "startupFrames": "10s cs4~",
    "blockFrames": "-5",
    "hitFrames": "+6",
    "counterHitFrames": "+6",
    "notes": ""
  },
  {
    "command": "d/b+2",
    "hitLevel": "Sm (TC)",
    "damage": "8",
    "startupFrames": "11s cs4~",
    "blockFrames": "-4",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
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
    "command": "u/b or u or u/f+2",
    "hitLevel": "h",
    "damage": "17",
    "startupFrames": "15~16",
    "blockFrames": "-12~-11",
    "hitFrames": "+9~+10g",
    "counterHitFrames": "+9~+10g",
    "notes": ""
  },
  {
    "command": "u/b+4",
    "hitLevel": "m (TJ)",
    "damage": "11",
    "startupFrames": "15~17",
    "blockFrames": "-19~-17",
    "hitFrames": "-8~-6",
    "counterHitFrames": "-8~-6",
    "notes": ""
  },
  {
    "command": "u+4",
    "hitLevel": "m (TJ)",
    "damage": "15",
    "startupFrames": "15~17",
    "blockFrames": "-13~-11",
    "hitFrames": "KND",
    "counterHitFrames": "Launch (JG?)",
    "notes": ""
  },
  {
    "command": "u/b or u+3+4",
    "hitLevel": "m (TJ)",
    "damage": "25",
    "startupFrames": "21",
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
    "command": "WS+1",
    "hitLevel": "m",
    "damage": "12",
    "startupFrames": "12~13",
    "blockFrames": "-2~-1",
    "hitFrames": "+9~+10",
    "counterHitFrames": "+9~+10",
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
    "startupFrames": "13s cs1~",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "FC+d/f+3",
    "hitLevel": "l (TC)",
    "damage": "12",
    "startupFrames": "16s cs1~",
    "blockFrames": "-17",
    "hitFrames": "-3",
    "counterHitFrames": "-3",
    "notes": ""
  },
  {
    "command": "FC+d/b or d+4",
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
    "damage": "10",
    "startupFrames": "10(11~)",
    "blockFrames": "+1",
    "hitFrames": "+7",
    "counterHitFrames": "+7",
    "notes": ""
  },
  {
    "command": "SS+3",
    "hitLevel": "m",
    "damage": "16",
    "startupFrames": "14(15~)",
    "blockFrames": "-8",
    "hitFrames": "+3",
    "counterHitFrames": "+3",
    "notes": ""
  },
  {
    "command": "SS+4",
    "hitLevel": "h",
    "damage": "16",
    "startupFrames": "11(12~)",
    "blockFrames": "-9",
    "hitFrames": "+7",
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
    "command": "in rage d+1+2 in rage HMS d+1+2",
    "hitLevel": "m",
    "damage": "20 pc8~17",
    "startupFrames": "55",
    "blockFrames": "-22",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art"
  },
  {
    "command": "in rage d/f+3+4",
    "hitLevel": "m",
    "damage": "25",
    "startupFrames": "16~17",
    "blockFrames": "-1~0",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art, Tail spin"
  },
  {
    "command": "in rage d/f+3+4, f, N",
    "hitLevel": "m, (MS)",
    "damage": "25",
    "startupFrames": "16~17",
    "blockFrames": "+2~+3",
    "hitFrames": "KND",
    "counterHitFrames": "KND",
    "notes": "Rage art, Tail spin"
  }
];