import { CharacterFrameData } from "../framedata.interface";

export const MasterRaven: CharacterFrameData[] = [
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
        "command": "1, 2, 3+4",
        "hitLevel": "h, h, (Special)",
        "damage": "7,12",
        "startupFrames": "10",
        "blockFrames": "-10",
        "hitFrames": "-3",
        "counterHitFrames": "-3",
        "notes": ""
    },
    {
        "command": "2",
        "hitLevel": "h",
        "damage": "10",
        "startupFrames": "10",
        "blockFrames": "-1",
        "hitFrames": "+8",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "2, 3",
        "hitLevel": "h, l (TC)",
        "damage": "10,10",
        "startupFrames": "s cs6~",
        "blockFrames": "-12",
        "hitFrames": "-1",
        "counterHitFrames": "-1",
        "notes": ""
    },
    {
        "command": "2, 4",
        "hitLevel": "h, h",
        "damage": "10,17",
        "startupFrames": "6~",
        "blockFrames": "-9~-7",
        "hitFrames": "+10~+12kg",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "3",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "14~15",
        "blockFrames": "-8~-7",
        "hitFrames": "+3~+4",
        "counterHitFrames": "+3~+4",
        "notes": ""
    },
    {
        "command": "3, 3",
        "hitLevel": "m, h",
        "damage": "12,12",
        "startupFrames": "14~15",
        "blockFrames": "-8~-7",
        "hitFrames": "+3~+4",
        "counterHitFrames": "+3~+4",
        "notes": ""
    },
    {
        "command": "3, 3, 4",
        "hitLevel": "m, h, h",
        "damage": "12,10,20",
        "startupFrames": "14~15a",
        "blockFrames": "-9",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "3, 3, 4, b (Cancel)",
        "hitLevel": "m, h, (Special)",
        "damage": "12,10",
        "startupFrames": "14~15ab",
        "blockFrames": "-16~-15",
        "hitFrames": "-8~-7",
        "counterHitFrames": "-5~-4",
        "notes": ""
    },
    {
        "command": "4",
        "hitLevel": "h",
        "damage": "17",
        "startupFrames": "12",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "4, 1",
        "hitLevel": "h, h",
        "damage": "17,12",
        "startupFrames": "12b",
        "blockFrames": "-2~-1",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": ""
    },
    {
        "command": "3~4",
        "hitLevel": "mm(BT)",
        "damage": "13,15",
        "startupFrames": "25~26, 31~36b (25~)",
        "blockFrames": "-9~-4",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "3~4, f",
        "hitLevel": "mm, (PHR)",
        "damage": "13,15",
        "startupFrames": "25~26, 31~36a (25~)",
        "blockFrames": "-39~-34",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "4~3",
        "hitLevel": "mm",
        "damage": "13,15",
        "startupFrames": "25 js14~",
        "blockFrames": "-9",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "4~3, F",
        "hitLevel": "mm (special)",
        "damage": "13",
        "startupFrames": "25 js14~",
        "blockFrames": "-39",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "4~3, 1",
        "hitLevel": "m, m, l (TC)",
        "damage": "8,10(12),12",
        "startupFrames": "s cs1~",
        "blockFrames": "-13~-12",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "4~3, 3",
        "hitLevel": "m, m, h",
        "damage": "8,10(12),23",
        "startupFrames": "1~",
        "blockFrames": "-4~0",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "4~3, 4",
        "hitLevel": "m, m, m",
        "damage": "8,10(12),17",
        "startupFrames": "1~",
        "blockFrames": "-14~-13",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "1+2",
        "hitLevel": "m(Attack returned)",
        "damage": "23",
        "startupFrames": "14",
        "blockFrames": "-9",
        "hitFrames": "CS",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "15~16",
        "blockFrames": "-10~-9",
        "hitFrames": "+1~+2",
        "counterHitFrames": "+1~+2",
        "notes": ""
    },
    {
        "command": "f+2, 3",
        "hitLevel": "m, m",
        "damage": "12,19",
        "startupFrames": "15~16",
        "blockFrames": "-10~-9",
        "hitFrames": "+2~+3s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+3",
        "hitLevel": "m",
        "damage": "18",
        "startupFrames": "17",
        "blockFrames": "-10",
        "hitFrames": "+1",
        "counterHitFrames": "+1",
        "notes": "Homing"
    },
    {
        "command": "f+3, B",
        "hitLevel": "m(BT)",
        "damage": "18",
        "startupFrames": "17b",
        "blockFrames": "-6",
        "hitFrames": "+5",
        "counterHitFrames": "+5",
        "notes": "Homing"
    },
    {
        "command": "f+3, 2",
        "hitLevel": "m, m",
        "damage": "18,21",
        "startupFrames": "17",
        "blockFrames": "-14",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+4",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "15~16",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+1+2",
        "hitLevel": "m",
        "damage": "24",
        "startupFrames": "22~24 pc8~21",
        "blockFrames": "-14~-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Power crush, Homing"
    },
    {
        "command": "d/f+1",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "14~15",
        "blockFrames": "-1~0",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "d/f+2",
        "hitLevel": "m",
        "damage": "16",
        "startupFrames": "16~18b",
        "blockFrames": "-11~-9",
        "hitFrames": "Launch (JG?) +3(SH)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "d/f+2, 3",
        "hitLevel": "m, h",
        "damage": "16,25",
        "startupFrames": "16~18",
        "blockFrames": "-3~-2",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "d/f+2, 4",
        "hitLevel": "m, m",
        "damage": "16,20",
        "startupFrames": "16~18",
        "blockFrames": "-15~-14",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+3",
        "hitLevel": "h (TC)",
        "damage": "21",
        "startupFrames": "16~17 cs8~",
        "blockFrames": "-9~-8",
        "hitFrames": "+7~+8(SH)",
        "counterHitFrames": "Launch",
        "notes": ""
    },
    {
        "command": "d/f+4",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "15~16",
        "blockFrames": "-15~-14",
        "hitFrames": "-1~0 (Launch (JG?))",
        "counterHitFrames": "-1~0 (Launch (JG?))",
        "notes": ""
    },
    {
        "command": "d/f+4, 4",
        "hitLevel": "m, m",
        "damage": "13,13",
        "startupFrames": "15~16",
        "blockFrames": "-15~-14",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+4, 4, 3",
        "hitLevel": "m, m, m (TJ)",
        "damage": "13,15,22",
        "startupFrames": "js1~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+4, 4, U",
        "hitLevel": "m, m, (Special) (TJ)",
        "damage": "13,15",
        "startupFrames": "js1~",
        "blockFrames": "-34~-31",
        "hitFrames": "-23~-20s -10~-7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+1+2",
        "hitLevel": "m",
        "damage": "30",
        "startupFrames": "40",
        "blockFrames": "-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+1+2, B (Cancel)",
        "hitLevel": "(BT)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "d+3",
        "hitLevel": "l",
        "damage": "12",
        "startupFrames": "14~15",
        "blockFrames": "-12~-11",
        "hitFrames": "0~+1",
        "counterHitFrames": "0~+1",
        "notes": ""
    },
    {
        "command": "d+4",
        "hitLevel": "l (TC)",
        "damage": "18",
        "startupFrames": "21s cs6~",
        "blockFrames": "-13",
        "hitFrames": "-2",
        "counterHitFrames": "-2",
        "notes": ""
    },
    {
        "command": "d/b+2",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "13~14b",
        "blockFrames": "-4~-3",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": ""
    },
    {
        "command": "d/b+2, 1",
        "hitLevel": "m, h",
        "damage": "13,12",
        "startupFrames": "13~14",
        "blockFrames": "-1~0",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "d/b+3",
        "hitLevel": "l (TJ)",
        "damage": "19",
        "startupFrames": "29~30s js8~27 cs28~",
        "blockFrames": "-12~-11",
        "hitFrames": "+5~+6",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/b+4",
        "hitLevel": "l (TC)",
        "damage": "21",
        "startupFrames": "24~25s cs6~",
        "blockFrames": "-14~-13",
        "hitFrames": "+4~+5s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "16~17",
        "blockFrames": "+5~+6s",
        "hitFrames": "+5~+6s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+2",
        "hitLevel": "h",
        "damage": "12",
        "startupFrames": "15~17",
        "blockFrames": "-14~-12",
        "hitFrames": "-3~-1",
        "counterHitFrames": "-3~-1",
        "notes": ""
    },
    {
        "command": "b+2, 2",
        "hitLevel": "h, m",
        "damage": "12,12",
        "startupFrames": "15~17b",
        "blockFrames": "-3",
        "hitFrames": "+8g",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "b+2, 2, 3",
        "hitLevel": "h, m, m",
        "damage": "12,12,20",
        "startupFrames": "15~17",
        "blockFrames": "-19~-18",
        "hitFrames": "KND",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "b+2, 2, 1+2",
        "hitLevel": "h, m, l (TC)",
        "damage": "12,12,15",
        "startupFrames": "cs18~",
        "blockFrames": "-30~-29",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+2, 4",
        "hitLevel": "h, h",
        "damage": "12,15",
        "startupFrames": "18~",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "b+2, 4, 2",
        "hitLevel": "h, h, h (TJ)",
        "damage": "12,15,20",
        "startupFrames": "js1~",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "b+2, 4, U",
        "hitLevel": "h, h, (Special) (TJ)",
        "damage": "12,15",
        "startupFrames": "js1~",
        "blockFrames": "-23~-22",
        "hitFrames": "-12~-11",
        "counterHitFrames": "-12~-11",
        "notes": ""
    },
    {
        "command": "b+3",
        "hitLevel": "m",
        "damage": "23",
        "startupFrames": "27~29",
        "blockFrames": "+1~+3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4",
        "hitLevel": "m",
        "damage": "11",
        "startupFrames": "14~15",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1",
        "counterHitFrames": "0~+1",
        "notes": ""
    },
    {
        "command": "b+4, 4",
        "hitLevel": "m, h",
        "damage": "11,13",
        "startupFrames": "14~15b",
        "blockFrames": "-9~-8",
        "hitFrames": "+6~+7k",
        "counterHitFrames": "+6~+7k",
        "notes": "Tail spin"
    },
    {
        "command": "b+4, b+4",
        "hitLevel": "m, m",
        "damage": "11,24",
        "startupFrames": "14~15b",
        "blockFrames": "+1~+6s",
        "hitFrames": "+2~+7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3)",
        "hitLevel": "m, l (TC)",
        "damage": "11,11",
        "startupFrames": "cs13~",
        "blockFrames": "-11",
        "hitFrames": "0",
        "counterHitFrames": "0",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), 4",
        "hitLevel": "m, l (TC), l (TC)",
        "damage": "11,11,9",
        "startupFrames": "cs1~",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), 4, 2",
        "hitLevel": "m, l (TC), l (TC), m",
        "damage": "11,11,9,21",
        "startupFrames": "1~",
        "blockFrames": "-13",
        "hitFrames": "CS",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), f+4",
        "hitLevel": "m, l (TC), l (TC)",
        "damage": "11,11,12",
        "startupFrames": "cs1~",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), f+4, 2",
        "hitLevel": "m, l (TC), l (TC), m",
        "damage": "11,11,12,21",
        "startupFrames": "1~",
        "blockFrames": "-13",
        "hitFrames": "CS",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), f+4~3",
        "hitLevel": "m, l (TC), m (TJ)",
        "damage": "11,11,22",
        "startupFrames": "js2~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), f+4, U",
        "hitLevel": "m, l (TC), (Special) (TJ)",
        "damage": "11,11",
        "startupFrames": "js2?~",
        "blockFrames": "-63~-62",
        "hitFrames": "-52~-51",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4, (b+4, 3), 3+4",
        "hitLevel": "m, l (TC), m",
        "damage": "11,11,15",
        "startupFrames": "2?~",
        "blockFrames": "-25~-21",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1+2",
        "hitLevel": "m",
        "damage": "28",
        "startupFrames": "31~32",
        "blockFrames": "-10~-9",
        "hitFrames": "+1~+2",
        "counterHitFrames": "+1~+2",
        "notes": ""
    },
    {
        "command": "b+1+2, 2",
        "hitLevel": "m, m",
        "damage": "28,12",
        "startupFrames": "31~32b",
        "blockFrames": "+1~+2s",
        "hitFrames": "+4~+5s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1+2, 3",
        "hitLevel": "m, l",
        "damage": "28,17",
        "startupFrames": "31~32(b)",
        "blockFrames": "-28~-25",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b+1",
        "hitLevel": "m?",
        "damage": "11",
        "startupFrames": "16",
        "blockFrames": "-6",
        "hitFrames": "+5",
        "counterHitFrames": "+5",
        "notes": ""
    },
    {
        "command": "u/b+1, 2",
        "hitLevel": "m, m",
        "damage": "11,13",
        "startupFrames": "16",
        "blockFrames": "-13~-12",
        "hitFrames": "-2~-1s",
        "counterHitFrames": "-2~-1s",
        "notes": ""
    },
    {
        "command": "u/b or u+3",
        "hitLevel": "h (TJ)",
        "damage": "25",
        "startupFrames": "26~28b js8~",
        "blockFrames": "-2~0",
        "hitFrames": "+5~+7",
        "counterHitFrames": "+5~+7",
        "notes": "Homing"
    },
    {
        "command": "u/b or u+3, 3",
        "hitLevel": "h (TJ), m",
        "damage": "25,20",
        "startupFrames": "26~28 8~",
        "blockFrames": "-15~-14",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+3, 4",
        "hitLevel": "h (TJ), h (TJ)",
        "damage": "25,37",
        "startupFrames": "js27~",
        "blockFrames": "+8~+9y",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+3, d+3",
        "hitLevel": "h (TJ), l (TC)",
        "damage": "25,18",
        "startupFrames": "cs14~",
        "blockFrames": "-15~-14",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+3, D+3",
        "hitLevel": "m, l, (Special)",
        "damage": "25,18",
        "startupFrames": "cs14~",
        "blockFrames": "-29~-28",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+3, d+3, 3",
        "hitLevel": "h (TJ), l (TC), m (TJ)",
        "damage": "25,18,22",
        "startupFrames": "js1~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+3, d+3, U",
        "hitLevel": "h (TJ), l (TC), (Special) (TJ)",
        "damage": "33,24",
        "startupFrames": "js1~",
        "blockFrames": "-40~-39",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3",
        "hitLevel": "m (TJ)",
        "damage": "20",
        "startupFrames": "29~30 js9~",
        "blockFrames": "-4~-3",
        "hitFrames": "0~+1s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+4",
        "hitLevel": "m (TJ)",
        "damage": "13",
        "startupFrames": "19~23 js8~",
        "blockFrames": "-5~-1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+4",
        "hitLevel": "m (TJ)",
        "damage": "16",
        "startupFrames": "19~23 js8~",
        "blockFrames": "-5~-1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u or u/f+4, 4",
        "hitLevel": "m (TJ), m",
        "damage": "13or16,20",
        "startupFrames": "19~23 8~",
        "blockFrames": "-15~-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4",
        "hitLevel": "m (TJ)",
        "damage": "20",
        "startupFrames": "23~25 js8~",
        "blockFrames": "-17~-15",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, 4",
        "hitLevel": "m (TJ), l (TC)",
        "damage": "20,9",
        "startupFrames": "cs1~",
        "blockFrames": "-14~-13",
        "hitFrames": "-3~-2",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, 4, 2",
        "hitLevel": "m (TJ), l (TC), m",
        "damage": "20,9,21",
        "startupFrames": "1~",
        "blockFrames": "-13",
        "hitFrames": "CS",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, f+4",
        "hitLevel": "m (TJ), l (TC)",
        "damage": "20,12",
        "startupFrames": "cs1~",
        "blockFrames": "-14~-13",
        "hitFrames": "-3~-2",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, f+4, 2",
        "hitLevel": "m (TJ), l (TC), m",
        "damage": "20,12,21",
        "startupFrames": "1~",
        "blockFrames": "-13",
        "hitFrames": "CS",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, f+4~3",
        "hitLevel": "m (TJ), m (TJ)",
        "damage": "20,22",
        "startupFrames": "js1~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, f+4, U",
        "hitLevel": "m (TJ), (Special) (TJ)",
        "damage": "20",
        "startupFrames": "js1~",
        "blockFrames": "-58~-57",
        "hitFrames": "-47~-46",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4, 3+4",
        "hitLevel": "m (TJ), m",
        "damage": "20,15",
        "startupFrames": "1~(s)",
        "blockFrames": "-26~-22",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+2",
        "hitLevel": "m",
        "damage": "26",
        "startupFrames": "16~17 (17~)",
        "blockFrames": "-13~-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+3",
        "hitLevel": "m (TJ)",
        "damage": "20",
        "startupFrames": "15~18 (16~) js7~",
        "blockFrames": "-14~-11",
        "hitFrames": "Launch",
        "counterHitFrames": "Launch",
        "notes": ""
    },
    {
        "command": "f, F+4",
        "hitLevel": "m",
        "damage": "21",
        "startupFrames": "15~17 (16~)",
        "blockFrames": "-10~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b, B+2",
        "hitLevel": "mh(Attack returned)",
        "damage": "15,21",
        "startupFrames": "17~18, 30~31 (18~)",
        "blockFrames": "-10~-9",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b, b",
        "hitLevel": "(Special) (TJ)",
        "damage": "",
        "startupFrames": "a",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "u/b, b, n+3+4",
        "hitLevel": "(Special) (TJ), ! (TJ) x 3",
        "damage": "20,20,20",
        "startupFrames": "35~40a, 46~49, 51~54 (75~) js11~",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+1",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "14~15",
        "blockFrames": "-14~-13",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+2",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~14",
        "blockFrames": "-8~-7",
        "hitFrames": "+8~+9 (SH)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+3",
        "hitLevel": "m",
        "damage": "21",
        "startupFrames": "16",
        "blockFrames": "-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+4",
        "hitLevel": "m",
        "damage": "18",
        "startupFrames": "11~12",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "WS+3+4",
        "hitLevel": "m",
        "damage": "23",
        "startupFrames": "16~19",
        "blockFrames": "-14~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Homing"
    },
    {
        "command": "FC+d/f+3+4",
        "hitLevel": "l (TC)",
        "damage": "17",
        "startupFrames": "18~20 cs1~17",
        "blockFrames": "-23",
        "hitFrames": "KND (YKU)",
        "counterHitFrames": "YKU",
        "notes": ""
    },
    {
        "command": "FC+d/f+3+4 When hit 4",
        "hitLevel": "l (TC), h",
        "damage": "17,30",
        "startupFrames": "18~20 1~17",
        "blockFrames": "",
        "hitFrames": "KND",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "FC+d/f, d, D/F",
        "hitLevel": "(Special) (TC)",
        "damage": "",
        "startupFrames": "s",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "1+2+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "When ki-charged b, f+1+2",
        "hitLevel": "(Special), !",
        "damage": "60",
        "startupFrames": "59~61 (104~) cs12~42",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "Parry after various moves like d, d+2 or d+1+2 voice change, b, f, u, d+3+4",
        "hitLevel": "! (TJ)",
        "damage": "35",
        "startupFrames": "45~47 js3~44",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "Parry after various moves like d, d+2 or d+1+2 voice change, b, f, u, d+3+4 (First part)",
        "hitLevel": "m (TJ)(, (throw))",
        "damage": "25(31)",
        "startupFrames": "17~21 js1~",
        "blockFrames": "0~+4?",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "Throw(KND)",
        "notes": ""
    },
    {
        "command": "Parry after various moves like d, d+2 or d+1+2 voice change, b, f, u, d+3+4 (Second part)",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "22~27 js1~",
        "blockFrames": "+5~+10?",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "3+4 (to HAZ)",
        "hitLevel": "(HAZ)",
        "damage": "",
        "startupFrames": "(20~)",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "HAZ 1",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "18~19 (38~)",
        "blockFrames": "-14~-13",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "HAZ 2",
        "hitLevel": "! (TJ)",
        "damage": "23",
        "startupFrames": "45~47 (65~) js1~44 cs45",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HAZ 3",
        "hitLevel": "l",
        "damage": "17",
        "startupFrames": "20~22b (40~) cs8~",
        "blockFrames": "-9~-7",
        "hitFrames": "+2~+4",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HAZ 4 (First part)",
        "hitLevel": "m (TJ)(, (throw))",
        "damage": "25(31)",
        "startupFrames": "17~21b (37~) js1~",
        "blockFrames": "-9~-5",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "Throw(KND)",
        "notes": ""
    },
    {
        "command": "HAZ 4 (Second part)",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "22~27b (42~) js1~",
        "blockFrames": "-4~+1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HAZ 1+2",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "14~15 (34~)",
        "blockFrames": "-13~-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Wall bounce"
    },
    {
        "command": "HAZ f",
        "hitLevel": "(Special), (Special)",
        "damage": "",
        "startupFrames": "s",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "HAZ u",
        "hitLevel": "(Special), (Special) (TJ)",
        "damage": "",
        "startupFrames": "js1~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "b+3+4 (to BT)",
        "hitLevel": "(BT)",
        "damage": "",
        "startupFrames": "b(14~)",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "BT 1",
        "hitLevel": "h",
        "damage": "10",
        "startupFrames": "8~9",
        "blockFrames": "-1~0",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": ""
    },
    {
        "command": "BT 1, 4",
        "hitLevel": "h, h",
        "damage": "10,30",
        "startupFrames": "8~9",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT 2",
        "hitLevel": "h",
        "damage": "13",
        "startupFrames": "10b",
        "blockFrames": "+1",
        "hitFrames": "+8g",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "BT 2, 1",
        "hitLevel": "h, h",
        "damage": "13,5",
        "startupFrames": "10",
        "blockFrames": "-1",
        "hitFrames": "+5",
        "counterHitFrames": "+5",
        "notes": ""
    },
    {
        "command": "BT 2, 1, B",
        "hitLevel": "h, h",
        "damage": "13,5",
        "startupFrames": "10b",
        "blockFrames": "-5",
        "hitFrames": "+1",
        "counterHitFrames": "+1",
        "notes": ""
    },
    {
        "command": "BT 2, 2",
        "hitLevel": "h, m",
        "damage": "13,15",
        "startupFrames": "10",
        "blockFrames": "-9~-8",
        "hitFrames": "+2~+3",
        "counterHitFrames": "+2~+3",
        "notes": ""
    },
    {
        "command": "BT 3",
        "hitLevel": "h",
        "damage": "10",
        "startupFrames": "10",
        "blockFrames": "-11",
        "hitFrames": "0",
        "counterHitFrames": "0",
        "notes": ""
    },
    {
        "command": "BT 3, 4",
        "hitLevel": "h, m",
        "damage": "10,17",
        "startupFrames": "10",
        "blockFrames": "-0~+2",
        "hitFrames": "+1~+3",
        "counterHitFrames": "+6~+8s",
        "notes": ""
    },
    {
        "command": "BT 3, 4, 3",
        "hitLevel": "h, m, m",
        "damage": "10,10,22",
        "startupFrames": "js1~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT 3, 4, 4",
        "hitLevel": "h, m, m (TJ)",
        "damage": "10,10,21",
        "startupFrames": "b js12~",
        "blockFrames": "-9~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT 3, 4, 4, F",
        "hitLevel": "h, m, m (TJ), (PHR)",
        "damage": "10,10,21",
        "startupFrames": "12~a",
        "blockFrames": "-36~-34",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT 3, 4, U",
        "hitLevel": "h, m, (Special) (TJ)",
        "damage": "10,10",
        "startupFrames": "js1~",
        "blockFrames": "-28~-27",
        "hitFrames": "-27~-26",
        "counterHitFrames": "-17~-16s",
        "notes": ""
    },
    {
        "command": "BT 4",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "10",
        "blockFrames": "-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT 1+2",
        "hitLevel": "m",
        "damage": "25",
        "startupFrames": "15~16",
        "blockFrames": "-13~-12 pc6",
        "hitFrames": "CS",
        "counterHitFrames": "CS",
        "notes": "Power Crush"
    },
    {
        "command": "BT 3+4",
        "hitLevel": "m, m",
        "damage": "5,20",
        "startupFrames": "15,34~35 js13~",
        "blockFrames": "-20~-19",
        "hitFrames": "Launch(JG?)",
        "counterHitFrames": "Launch(JG?)",
        "notes": ""
    },
    {
        "command": "BT 3+4 (Second hit only)",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "34~35 js13~",
        "blockFrames": "-20~-19",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "BT f+1",
        "hitLevel": "m(, (throw))",
        "damage": "18",
        "startupFrames": "16(b)",
        "blockFrames": "-13",
        "hitFrames": "+5b",
        "counterHitFrames": "+5b",
        "notes": ""
    },
    {
        "command": "BT f+2",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "17~18",
        "blockFrames": "-5~-4",
        "hitFrames": "+6~+7",
        "counterHitFrames": "+6~+7",
        "notes": ""
    },
    {
        "command": "BT f+2, 3",
        "hitLevel": "m, m",
        "damage": "13,15",
        "startupFrames": "17~18",
        "blockFrames": "-7~-6",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f+2, 4",
        "hitLevel": "m, h",
        "damage": "13,15",
        "startupFrames": "17~18",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "BT f+2, 4, 2",
        "hitLevel": "m, h, h (TJ)",
        "damage": "13,15,20",
        "startupFrames": "js1~",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "BT f+2, 4, U",
        "hitLevel": "m, h, (Special) (TJ)",
        "damage": "13,15",
        "startupFrames": "js1~",
        "blockFrames": "-23~-22",
        "hitFrames": "-12~-11",
        "counterHitFrames": "-12~-11",
        "notes": ""
    },
    {
        "command": "BT f+3",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f+3, b",
        "hitLevel": "m(BT)",
        "damage": "17",
        "startupFrames": "13b",
        "blockFrames": "-11",
        "hitFrames": "0",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f+4",
        "hitLevel": "l",
        "damage": "9",
        "startupFrames": "16b",
        "blockFrames": "-9",
        "hitFrames": "+2",
        "counterHitFrames": "+2",
        "notes": ""
    },
    {
        "command": "BT f+4, 3",
        "hitLevel": "l, h",
        "damage": "9,21",
        "startupFrames": "16",
        "blockFrames": "-12~-11",
        "hitFrames": "+4~+5 (SH)",
        "counterHitFrames": "+4~+5 (SH)",
        "notes": "Tail spin"
    },
    {
        "command": "BT f+1+2",
        "hitLevel": "Attack returned",
        "damage": "30",
        "startupFrames": "1~7",
        "blockFrames": "",
        "hitFrames": "Attack returned(KND)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "BT f+1+2, B",
        "hitLevel": "Attack returned",
        "damage": "30",
        "startupFrames": "1~7b",
        "blockFrames": "",
        "hitFrames": "Attack returned(KND)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "BT f+3+4",
        "hitLevel": "m (TJ)",
        "damage": "24",
        "startupFrames": "25~27b js5~",
        "blockFrames": "-9~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f+3+4, F",
        "hitLevel": "m (TJ), (PHR)",
        "damage": "24",
        "startupFrames": "25~27ba",
        "blockFrames": "-36~-34",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT d+3 (Close)",
        "hitLevel": "l (TC)",
        "damage": "21",
        "startupFrames": "25 cs4~",
        "blockFrames": "-26",
        "hitFrames": "YKU",
        "counterHitFrames": "YKU",
        "notes": ""
    },
    {
        "command": "BT d+3",
        "hitLevel": "l (TC)",
        "damage": "14",
        "startupFrames": "25~27 cs4~",
        "blockFrames": "-26",
        "hitFrames": "0~+2",
        "counterHitFrames": "0~+2",
        "notes": ""
    },
    {
        "command": "BT b+2",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "16~17",
        "blockFrames": "-2~-1",
        "hitFrames": "+6~+7",
        "counterHitFrames": "+6~+7",
        "notes": ""
    },
    {
        "command": "BT b+2, 3",
        "hitLevel": "m, mm",
        "damage": "17,5,20",
        "startupFrames": "js13~",
        "blockFrames": "-20~-19",
        "hitFrames": "Launch(JG?)",
        "counterHitFrames": "Launch(JG?)",
        "notes": ""
    },
    {
        "command": "BT b+2, 3 (Third hit only)",
        "hitLevel": "m, m",
        "damage": "20",
        "startupFrames": "js13~",
        "blockFrames": "-20~-19",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "BT b+2, 4",
        "hitLevel": "m, h",
        "damage": "17,13",
        "startupFrames": "13~",
        "blockFrames": "-9",
        "hitFrames": "0",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "BT b+3",
        "hitLevel": "h",
        "damage": "27",
        "startupFrames": "18~19b",
        "blockFrames": "+5~+6",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin, Homing"
    },
    {
        "command": "BT f, F+3",
        "hitLevel": "m (TC)",
        "damage": "25",
        "startupFrames": "21~22 (22~) cs4~",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f, F+3+4",
        "hitLevel": "l (TJ)",
        "damage": "17",
        "startupFrames": "23~30 (24~) js13~21 cs18~",
        "blockFrames": "-18~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "BT f, f, f",
        "hitLevel": "(PHR)",
        "damage": "",
        "startupFrames": "a(b)",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "qcf",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "()",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "qcf+1",
        "hitLevel": "m",
        "damage": "19",
        "startupFrames": "19~20 (21~)",
        "blockFrames": "-9~-8",
        "hitFrames": "+4~+5",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "qcf+1, 3+4",
        "hitLevel": "m, (Special)",
        "damage": "19",
        "startupFrames": "19~20 (21~)",
        "blockFrames": "-2~-1",
        "hitFrames": "+11~+12",
        "counterHitFrames": "CS(16)",
        "notes": ""
    },
    {
        "command": "qcf+2",
        "hitLevel": "l (TC)",
        "damage": "10",
        "startupFrames": "27~28 (29~) cs10~",
        "blockFrames": "-17~-16",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Wall bounce"
    },
    {
        "command": "qcf+2, B (Cancel)",
        "hitLevel": "(BT)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "qcf+2~1",
        "hitLevel": "m",
        "damage": "30",
        "startupFrames": "40(40)",
        "blockFrames": "-12",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "qcf+3",
        "hitLevel": "h",
        "damage": "14",
        "startupFrames": "16~17 (18~)",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5 (SH)",
        "counterHitFrames": "+4~+5 (SH)",
        "notes": ""
    },
    {
        "command": "qcf+3, When hit 4",
        "hitLevel": "h(, m, (throw))",
        "damage": "14,20,6",
        "startupFrames": "16~17 (18~)",
        "blockFrames": "",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "Throw(KND)",
        "notes": ""
    },
    {
        "command": "qcf+4",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "19~20b (21~)",
        "blockFrames": "-14~-13",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "qcf+1+2",
        "hitLevel": "mm(Returns move)",
        "damage": "12,21",
        "startupFrames": "24,35s (26~) cs19~",
        "blockFrames": "-9",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "qcf+1+2 (First hit only)",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "24s(26~) cs19~",
        "blockFrames": "-25",
        "hitFrames": "CS",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "qcf+3+4",
        "hitLevel": "m",
        "damage": "23",
        "startupFrames": "16~19 (18~)",
        "blockFrames": "-14~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Homing"
    },
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
        "damage": "10",
        "startupFrames": "10",
        "blockFrames": "-1",
        "hitFrames": "+8",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "3",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "14~15",
        "blockFrames": "-8~-7",
        "hitFrames": "+3~+4",
        "counterHitFrames": "+3~+4",
        "notes": ""
    },
    {
        "command": "4",
        "hitLevel": "h",
        "damage": "17",
        "startupFrames": "12",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "Launch (JG?)",
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
        "command": "f+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "15~16",
        "blockFrames": "-10~-9",
        "hitFrames": "+1~+2",
        "counterHitFrames": "+1~+2",
        "notes": ""
    },
    {
        "command": "f+3",
        "hitLevel": "m",
        "damage": "18",
        "startupFrames": "17",
        "blockFrames": "-10",
        "hitFrames": "+1",
        "counterHitFrames": "+1",
        "notes": "Homing"
    },
    {
        "command": "f+4",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "15~16",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/f+1",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "14~15",
        "blockFrames": "-1~0",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "d/f+2",
        "hitLevel": "m",
        "damage": "16",
        "startupFrames": "16~18b",
        "blockFrames": "-11~-9",
        "hitFrames": "Launch (JG?) +3(SH)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "d/f+3",
        "hitLevel": "h (TC)",
        "damage": "21",
        "startupFrames": "16~17 cs8~",
        "blockFrames": "-9~-8",
        "hitFrames": "+7~+8(SH)",
        "counterHitFrames": "Launch",
        "notes": ""
    },
    {
        "command": "d/f+4",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "15~16",
        "blockFrames": "-15~-14",
        "hitFrames": "-1~0 (Launch (JG?))",
        "counterHitFrames": "-1~0 (Launch (JG?))",
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
        "hitLevel": "l",
        "damage": "12",
        "startupFrames": "14~15",
        "blockFrames": "-12~-11",
        "hitFrames": "0~+1",
        "counterHitFrames": "0~+1",
        "notes": ""
    },
    {
        "command": "d+4",
        "hitLevel": "l (TC)",
        "damage": "18",
        "startupFrames": "21s cs6~",
        "blockFrames": "-13",
        "hitFrames": "-2",
        "counterHitFrames": "-2",
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
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "13~14b",
        "blockFrames": "-4~-3",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": ""
    },
    {
        "command": "d/b+3",
        "hitLevel": "l (TJ)",
        "damage": "19",
        "startupFrames": "29~30s js8~27 cs28~",
        "blockFrames": "-12~-11",
        "hitFrames": "+5~+6",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/b+4",
        "hitLevel": "l (TC)",
        "damage": "21",
        "startupFrames": "24~25s cs6~",
        "blockFrames": "-14~-13",
        "hitFrames": "+4~+5s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "16~17",
        "blockFrames": "+5~+6s",
        "hitFrames": "+5~+6s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+2",
        "hitLevel": "h",
        "damage": "12",
        "startupFrames": "15~17",
        "blockFrames": "-14~-12",
        "hitFrames": "-3~-1",
        "counterHitFrames": "-3~-1",
        "notes": ""
    },
    {
        "command": "b+3",
        "hitLevel": "m",
        "damage": "23",
        "startupFrames": "27~29",
        "blockFrames": "+1~+3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4",
        "hitLevel": "m",
        "damage": "11",
        "startupFrames": "14~15",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1",
        "counterHitFrames": "0~+1",
        "notes": ""
    },
    {
        "command": "u/b+1",
        "hitLevel": "m?",
        "damage": "11",
        "startupFrames": "16",
        "blockFrames": "-6",
        "hitFrames": "+5",
        "counterHitFrames": "+5",
        "notes": ""
    },
    {
        "command": "u or u/f+1",
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
        "command": "u/b or u+3",
        "hitLevel": "h (TJ)",
        "damage": "25",
        "startupFrames": "26~28b js8~",
        "blockFrames": "-2~0",
        "hitFrames": "+5~+7",
        "counterHitFrames": "+5~+7",
        "notes": "Homing"
    },
    {
        "command": "u/f+3",
        "hitLevel": "m (TJ)",
        "damage": "20",
        "startupFrames": "29~30 js9~",
        "blockFrames": "-4~-3",
        "hitFrames": "0~+1s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/b or u+4",
        "hitLevel": "m (TJ)",
        "damage": "13",
        "startupFrames": "19~23 js8~",
        "blockFrames": "-5~-1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+4",
        "hitLevel": "m (TJ)",
        "damage": "16",
        "startupFrames": "19~23 js8~",
        "blockFrames": "-5~-1",
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
        "damage": "14",
        "startupFrames": "14~15",
        "blockFrames": "-14~-13",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+2",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~14",
        "blockFrames": "-8~-7",
        "hitFrames": "+8~+9 (SH)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+3",
        "hitLevel": "m",
        "damage": "21",
        "startupFrames": "16",
        "blockFrames": "-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+4",
        "hitLevel": "m",
        "damage": "18",
        "startupFrames": "11~12",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
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
        "command": "FC+3",
        "hitLevel": "l (TC)",
        "damage": "12",
        "startupFrames": "16s cs1~",
        "blockFrames": "-15",
        "hitFrames": "-4",
        "counterHitFrames": "-4",
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
        "damage": "10",
        "startupFrames": "10(11~)",
        "blockFrames": "-1",
        "hitFrames": "+8",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "SS+3",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "14~15 (15~)",
        "blockFrames": "-8~-7",
        "hitFrames": "+3~+4",
        "counterHitFrames": "+3~+4",
        "notes": ""
    },
    {
        "command": "SS+4",
        "hitLevel": "h",
        "damage": "17",
        "startupFrames": "12(13~)",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "BT 1",
        "hitLevel": "h",
        "damage": "10",
        "startupFrames": "8~9",
        "blockFrames": "-1~0",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": ""
    },
    {
        "command": "BT 2",
        "hitLevel": "h",
        "damage": "13",
        "startupFrames": "10b",
        "blockFrames": "+1",
        "hitFrames": "+8g",
        "counterHitFrames": "+8",
        "notes": ""
    },
    {
        "command": "BT 3",
        "hitLevel": "h",
        "damage": "10",
        "startupFrames": "10",
        "blockFrames": "-11",
        "hitFrames": "0",
        "counterHitFrames": "0",
        "notes": ""
    },
    {
        "command": "BT 4",
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
        "command": "BT d+3 (Close)",
        "hitLevel": "l (TC)",
        "damage": "21",
        "startupFrames": "25 cs4~",
        "blockFrames": "-26",
        "hitFrames": "YKU",
        "counterHitFrames": "YKU",
        "notes": ""
    },
    {
        "command": "BT d+3",
        "hitLevel": "l (TC)",
        "damage": "14",
        "startupFrames": "25~27 cs4~",
        "blockFrames": "-26",
        "hitFrames": "0~+2",
        "counterHitFrames": "0~+2",
        "notes": ""
    },
    {
        "command": "BT d+4",
        "hitLevel": "l",
        "damage": "12",
        "startupFrames": "10s cs1~",
        "blockFrames": "-11",
        "hitFrames": "+3",
        "counterHitFrames": "+3",
        "notes": ""
    },
    {
        "command": "in rage d/b+3+4",
        "hitLevel": "m (TJ)",
        "damage": "55",
        "startupFrames": "20 pc8~17 js9~17",
        "blockFrames": "-22",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Rage art"
    },
    {
        "command": "in rage f+3+4",
        "hitLevel": "m (TJ)(, (throw))",
        "damage": "20,10",
        "startupFrames": "15~18 js7~",
        "blockFrames": "+5~+8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Rage art"
    },
    {
        "command": "in rage f+3+4, When hit 2",
        "hitLevel": "m (TJ), (throw), h",
        "damage": "20,10,15",
        "startupFrames": "15~18 7~",
        "blockFrames": "",
        "hitFrames": "KND",
        "counterHitFrames": "",
        "notes": "Rage art, Tail spin"
    },
    {
        "command": "in rage f+3+4, When hit d+2",
        "hitLevel": "m (TJ), (throw), !",
        "damage": "20,10,35",
        "startupFrames": "15~18 7~",
        "blockFrames": "",
        "hitFrames": "KND",
        "counterHitFrames": "",
        "notes": "Rage art"
    }
];