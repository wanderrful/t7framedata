import { CharacterFrameData } from "../framedata.interface";

export const Xiaoyu: CharacterFrameData[] = [
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
        "damage": "7,8",
        "startupFrames": "10",
        "blockFrames": "-1",
        "hitFrames": "+5",
        "counterHitFrames": "+5",
        "notes": ""
    },
    {
        "command": "1, 2, 1",
        "hitLevel": "h, h, m",
        "damage": "7,8,20",
        "startupFrames": "10",
        "blockFrames": "-9~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "1, D+2",
        "hitLevel": "h, m",
        "damage": "7,10",
        "startupFrames": "10",
        "blockFrames": "-4~-1",
        "hitFrames": "+7~+10",
        "counterHitFrames": "+9~+12",
        "notes": ""
    },
    {
        "command": "1, d+2",
        "hitLevel": "h, m(RDS)",
        "damage": "7,10",
        "startupFrames": "10b",
        "blockFrames": "-3~0",
        "hitFrames": "+8~+11",
        "counterHitFrames": "+10~+13",
        "notes": ""
    },
    {
        "command": "1, d+2, 1+2",
        "hitLevel": "h, m, m",
        "damage": "7,10,24",
        "startupFrames": "10",
        "blockFrames": "-12~-10",
        "hitFrames": "CS",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "2",
        "hitLevel": "h",
        "damage": "8",
        "startupFrames": "10",
        "blockFrames": "-2",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "2, 1",
        "hitLevel": "h, m(RDS)",
        "damage": "8,10",
        "startupFrames": "10b",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "2, D/F+1",
        "hitLevel": "h, m",
        "damage": "8,10",
        "startupFrames": "10",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "3",
        "hitLevel": "h",
        "damage": "17",
        "startupFrames": "14~15",
        "blockFrames": "-11~-10",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "4",
        "hitLevel": "h",
        "damage": "15",
        "startupFrames": "11",
        "blockFrames": "-9",
        "hitFrames": "+8",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "4~3",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "23~25s (24~) js10~",
        "blockFrames": "-1~+1s",
        "hitFrames": "+3~+5s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "4~3, d+1+2",
        "hitLevel": "m (TJ), (Special)",
        "damage": "23",
        "startupFrames": "23~25 (24~) js10~",
        "blockFrames": "0~+2s",
        "hitFrames": "+4~+6s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "1+2",
        "hitLevel": "m",
        "damage": "24",
        "startupFrames": "20~21",
        "blockFrames": "-7~-6",
        "hitFrames": "CS",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "3+4 or u+3+4",
        "hitLevel": "(Special)(Absorbs 1 h/m hit)",
        "damage": "",
        "startupFrames": "2~10",
        "blockFrames": "",
        "hitFrames": "(+5b)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "d+3+4",
        "hitLevel": "(Special)(Absorbs 1 h/m hit)",
        "damage": "",
        "startupFrames": "2~10",
        "blockFrames": "",
        "hitFrames": "(+5b)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "f+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "16~17",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "f+2, 1",
        "hitLevel": "m, h",
        "damage": "12,14",
        "startupFrames": "16~17",
        "blockFrames": "-3",
        "hitFrames": "+8",
        "counterHitFrames": "+10",
        "notes": ""
    },
    {
        "command": "f+2, 1, 4",
        "hitLevel": "m, h, m",
        "damage": "12,14,20",
        "startupFrames": "16~17",
        "blockFrames": "-12~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "f+3",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "16~18",
        "blockFrames": "-9~-7",
        "hitFrames": "+2~+4",
        "counterHitFrames": "+2~+4",
        "notes": ""
    },
    {
        "command": "f+3, 1",
        "hitLevel": "m, m",
        "damage": "14,8",
        "startupFrames": "16~18b",
        "blockFrames": "-4~-2",
        "hitFrames": "+7~+9",
        "counterHitFrames": "+7~+9",
        "notes": ""
    },
    {
        "command": "f+3, 1, 1+2",
        "hitLevel": "m, m, mm",
        "damage": "14,8,6,20",
        "startupFrames": "16~18",
        "blockFrames": "-12~-11",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "+7~+8s",
        "notes": ""
    },
    {
        "command": "f+4",
        "hitLevel": "h",
        "damage": "23",
        "startupFrames": "19~20",
        "blockFrames": "+1~+2",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin, Homing"
    },
    {
        "command": "f+1+2",
        "hitLevel": "m",
        "damage": "25",
        "startupFrames": "12~13",
        "blockFrames": "-16~-15",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "s",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "f+3+4, 3+4",
        "hitLevel": "(Special), mmm (TJ)",
        "damage": "8,8,14",
        "startupFrames": "20~21, 28~29, 37~40s (46~) js23~",
        "blockFrames": "-10~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f+3+4, 3+4 (second and third hit miss)",
        "hitLevel": "(Special), m",
        "damage": "8",
        "startupFrames": "20~21 (46~)",
        "blockFrames": "-46",
        "hitFrames": "-35",
        "counterHitFrames": "-35",
        "notes": ""
    },
    {
        "command": "f+3+4, d+1+2",
        "hitLevel": "(Special), (AOP)",
        "damage": "",
        "startupFrames": "20~21 (46~)",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "d/f+1",
        "hitLevel": "m (TC)(RDS)",
        "damage": "11",
        "startupFrames": "14b cs6~13",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "D/F+1",
        "hitLevel": "m (TC)",
        "damage": "11",
        "startupFrames": "14 cs6~13",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "d/f+2",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "15",
        "blockFrames": "-6",
        "hitFrames": "+5a",
        "counterHitFrames": "+5a",
        "notes": ""
    },
    {
        "command": "d/f+2~1",
        "hitLevel": "mm",
        "damage": "8,12",
        "startupFrames": "15~16, 22~23 (15~16)",
        "blockFrames": "-13~-12",
        "hitFrames": "JG",
        "counterHitFrames": "JG",
        "notes": ""
    },
    {
        "command": "d/f+2~1 (Second hit only)",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "22~23",
        "blockFrames": "-12~-11",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "d/f+3",
        "hitLevel": "h",
        "damage": "23",
        "startupFrames": "23~24 pc8~22",
        "blockFrames": "-8~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Power crush"
    },
    {
        "command": "d/f+4",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "12",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "d+1",
        "hitLevel": "mmm",
        "damage": "7,7,7",
        "startupFrames": "17~19, 21~23, 26~32s",
        "blockFrames": "-9~-3",
        "hitFrames": "+2~+8s",
        "counterHitFrames": "+2~+8s",
        "notes": ""
    },
    {
        "command": "d+1 (Third hit miss, Second hit only)",
        "hitLevel": "mm",
        "damage": "7,7",
        "startupFrames": "17~19, 21~23s",
        "blockFrames": "-14~-12",
        "hitFrames": "-3~-1s",
        "counterHitFrames": "-3~-1s",
        "notes": ""
    },
    {
        "command": "D+1",
        "hitLevel": "mmm, (AOP)",
        "damage": "7,7,7",
        "startupFrames": "17~18, 21~23, 26~32s",
        "blockFrames": "-13~-7",
        "hitFrames": "-2~+4s",
        "counterHitFrames": "-2~+4s",
        "notes": ""
    },
    {
        "command": "D+1 (Third hit miss, Second hit only)",
        "hitLevel": "mm, (Special)",
        "damage": "7,7",
        "startupFrames": "17~18, 21~23a",
        "blockFrames": "-18~-16",
        "hitFrames": "-7~-5s",
        "counterHitFrames": "-7~-5s",
        "notes": ""
    },
    {
        "command": "d+3",
        "hitLevel": "l (TC)",
        "damage": "12",
        "startupFrames": "14s cs6~",
        "blockFrames": "-12",
        "hitFrames": "-3",
        "counterHitFrames": "+1",
        "notes": ""
    },
    {
        "command": "d+3, 4",
        "hitLevel": "l (TC), h",
        "damage": "12,21",
        "startupFrames": "14 6~",
        "blockFrames": "0~+1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/b+1",
        "hitLevel": "m",
        "damage": "30",
        "startupFrames": "18",
        "blockFrames": "-9",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/b+3",
        "hitLevel": "l(!)",
        "damage": "0",
        "startupFrames": "15",
        "blockFrames": "+2",
        "hitFrames": "+2s",
        "counterHitFrames": "+2s",
        "notes": ""
    },
    {
        "command": "d/b+4",
        "hitLevel": "l",
        "damage": "12",
        "startupFrames": "18",
        "blockFrames": "-12",
        "hitFrames": "+7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1",
        "hitLevel": "m(RDS)",
        "damage": "10",
        "startupFrames": "8~13(b)",
        "blockFrames": "",
        "hitFrames": "+1",
        "counterHitFrames": "+1",
        "notes": ""
    },
    {
        "command": "B+1",
        "hitLevel": "m",
        "damage": "10",
        "startupFrames": "8~13",
        "blockFrames": "-12~-7",
        "hitFrames": "-1~+4",
        "counterHitFrames": "-1~+4",
        "notes": ""
    },
    {
        "command": "b+2",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "15~16b",
        "blockFrames": "-6~-5",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": "Homing"
    },
    {
        "command": "b+2, 2",
        "hitLevel": "m, l?",
        "damage": "13,10",
        "startupFrames": "15~16b",
        "blockFrames": "-8~-6",
        "hitFrames": "+3~+5",
        "counterHitFrames": "+3~+5",
        "notes": ""
    },
    {
        "command": "b+3",
        "hitLevel": "h",
        "damage": "22",
        "startupFrames": "18~19b",
        "blockFrames": "-4~-3",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "13~15",
        "blockFrames": "-11~-9",
        "hitFrames": "0~+2",
        "counterHitFrames": "0~+2",
        "notes": ""
    },
    {
        "command": "b+4, 4",
        "hitLevel": "m, h",
        "damage": "14,17",
        "startupFrames": "13~15",
        "blockFrames": "-9~-8",
        "hitFrames": "+14kg",
        "counterHitFrames": "+14kg",
        "notes": "Tail spin"
    },
    {
        "command": "u/b+3+4",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "22~24 js18~",
        "blockFrames": "-17~-15",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u/b+3+4, d+1+2",
        "hitLevel": "m (TJ), (AOP)",
        "damage": "23",
        "startupFrames": "22~24 js18~",
        "blockFrames": "-19~-17",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u+1+2",
        "hitLevel": "mm",
        "damage": "5,5",
        "startupFrames": "16~18, 22~24s",
        "blockFrames": "-11~-9",
        "hitFrames": "0~+2s",
        "counterHitFrames": "0~+2s",
        "notes": ""
    },
    {
        "command": "u+1+2, 2",
        "hitLevel": "mm, m",
        "damage": "5,5,12",
        "startupFrames": "16~18, 22~24",
        "blockFrames": "-12",
        "hitFrames": "-1",
        "counterHitFrames": "-1",
        "notes": ""
    },
    {
        "command": "u+1+2, 2, 1",
        "hitLevel": "mm, m, m",
        "damage": "5,5,12,20",
        "startupFrames": "16~18, 22~24",
        "blockFrames": "-12~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u+1+2, 2, 1, b (Cancel)",
        "hitLevel": "mm, m, (RDS)",
        "damage": "5,5,12",
        "startupFrames": "16~18, 22~24b",
        "blockFrames": "-19",
        "hitFrames": "-8",
        "counterHitFrames": "-8",
        "notes": ""
    },
    {
        "command": "u+1+2, 3+4",
        "hitLevel": "mm",
        "damage": "5,5",
        "startupFrames": "16~18, 22~24",
        "blockFrames": "-16~-14",
        "hitFrames": "-5~-3s",
        "counterHitFrames": "-5~-3s",
        "notes": ""
    },
    {
        "command": "u or u/f+1",
        "hitLevel": "l (TJ), (AOP)",
        "damage": "15",
        "startupFrames": "33~35 js9~23",
        "blockFrames": "-7~-5",
        "hitFrames": "+10~+12s",
        "counterHitFrames": "+10~+12s",
        "notes": ""
    },
    {
        "command": "u/b+3",
        "hitLevel": "m",
        "damage": "11",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "-1~0",
        "counterHitFrames": "-1~0",
        "notes": ""
    },
    {
        "command": "u+3",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "KND",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u/f+3",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u+4",
        "hitLevel": "m (TJ)",
        "damage": "20",
        "startupFrames": "23~26 js9~",
        "blockFrames": "-7~-4",
        "hitFrames": "+4~+7s",
        "counterHitFrames": "KND (+4~+7s)",
        "notes": ""
    },
    {
        "command": "u/f+4",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "23~26 js9~",
        "blockFrames": "-3~0",
        "hitFrames": "+8~+11s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+4, D",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "23~26s js9~",
        "blockFrames": "-7~-4",
        "hitFrames": "+4~+7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+4, d+1+2",
        "hitLevel": "m (TJ), (AOP)",
        "damage": "23",
        "startupFrames": "23~26 js9~",
        "blockFrames": "-9~-6",
        "hitFrames": "+2~+5s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+1+2",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "26~27 js9~",
        "blockFrames": "+3~+4s",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+1+2, B",
        "hitLevel": "m (TJ)(RDS)",
        "damage": "23",
        "startupFrames": "26~27b js9~",
        "blockFrames": "+3~+4s",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4",
        "hitLevel": "mmm (TJ)",
        "damage": "8,10,12",
        "startupFrames": "16~17 ,27~28, 36~37(b) js9~",
        "blockFrames": "-3~-2",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f+3+4 (Third hit miss)",
        "hitLevel": "mm (TJ)",
        "damage": "8,10",
        "startupFrames": "16~17 ,27~28(b) js9~",
        "blockFrames": "-21~-20",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "f, F+1",
        "hitLevel": "m",
        "damage": "19",
        "startupFrames": "15(16~)",
        "blockFrames": "-11",
        "hitFrames": "0s",
        "counterHitFrames": "0s",
        "notes": ""
    },
    {
        "command": "f, F+1, D",
        "hitLevel": "m, (AOP)",
        "damage": "19",
        "startupFrames": "15(16~)",
        "blockFrames": "-5",
        "hitFrames": "+6s",
        "counterHitFrames": "+6s",
        "notes": ""
    },
    {
        "command": "f, F+1, 3",
        "hitLevel": "m, h",
        "damage": "19,20",
        "startupFrames": "15(16~)",
        "blockFrames": "-1~0",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+1, 4",
        "hitLevel": "m, m",
        "damage": "19,20",
        "startupFrames": "15(16~)",
        "blockFrames": "-12~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "15(16~)",
        "blockFrames": "-5",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "f, F+2, 1",
        "hitLevel": "m, m",
        "damage": "12,20",
        "startupFrames": "15(16~)",
        "blockFrames": "-12~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+2, 1, b (Cancel)",
        "hitLevel": "m, (RDS)",
        "damage": "12",
        "startupFrames": "15b(16~)",
        "blockFrames": "-19",
        "hitFrames": "-8",
        "counterHitFrames": "-8",
        "notes": ""
    },
    {
        "command": "f, F+3",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "14~15b (15~)",
        "blockFrames": "-5~-4",
        "hitFrames": "+6~+7",
        "counterHitFrames": "+7~+8y",
        "notes": ""
    },
    {
        "command": "f, F+4",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "24(25~) js9~20",
        "blockFrames": "+1",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+4, When guarded4",
        "hitLevel": "m (TJ), (Special)",
        "damage": "",
        "startupFrames": "24(25~) 9~20",
        "blockFrames": "+5",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "f, F+1+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "14~16 (15~)",
        "blockFrames": "-9~-7",
        "hitFrames": "+5~+7",
        "counterHitFrames": "+5~+7",
        "notes": ""
    },
    {
        "command": "f, F+1+2, 1+2",
        "hitLevel": "m, m",
        "damage": "12,21",
        "startupFrames": "14~16 (15~)",
        "blockFrames": "-8~-7",
        "hitFrames": "+5~+6s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "f, F+3+4",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "37~45",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "~js9~",
        "hitLevel": "-5~+3",
        "damage": "KND",
        "startupFrames": "KND",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "f, f, f+3",
        "hitLevel": "m (TJ), (Special)",
        "damage": "20",
        "startupFrames": "23~30 (26~) js3~",
        "blockFrames": "+7~+14g",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+2",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~15b",
        "blockFrames": "-4~-2",
        "hitFrames": "+7~+9",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+2, b or f",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~15",
        "blockFrames": "-6~-4",
        "hitFrames": "+5~+7",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+2*",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "22b",
        "blockFrames": "-3",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+2*, b or f",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "22",
        "blockFrames": "-5",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+3",
        "hitLevel": "m",
        "damage": "22",
        "startupFrames": "22~23",
        "blockFrames": "+3~+4s",
        "hitFrames": "+6~+7s (KND)",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+4",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "11~13",
        "blockFrames": "-10~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+b+4 or QCB+4",
        "hitLevel": "h",
        "damage": "20",
        "startupFrames": "14~16",
        "blockFrames": "-4~-2",
        "hitFrames": "+1~+3",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "FC+3",
        "hitLevel": "l (TC)",
        "damage": "11",
        "startupFrames": "15~17s cs1~",
        "blockFrames": "-15~-13",
        "hitFrames": "-4~-2",
        "counterHitFrames": "-4~-2",
        "notes": ""
    },
    {
        "command": "FC+3, 2",
        "hitLevel": "l (TC), h",
        "damage": "11,6",
        "startupFrames": "15~17 1~b",
        "blockFrames": "0",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "FC+3, 2, 1",
        "hitLevel": "l (TC), h, h",
        "damage": "11,6,6",
        "startupFrames": "15~17 1~",
        "blockFrames": "-1",
        "hitFrames": "+6",
        "counterHitFrames": "+10",
        "notes": ""
    },
    {
        "command": "FC+3, 2, 1, 4",
        "hitLevel": "l (TC), h, h, m",
        "damage": "11,6,6,12",
        "startupFrames": "15~17 1~",
        "blockFrames": "-18~-16",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "FC+d/f+2",
        "hitLevel": "l (TC)",
        "damage": "10",
        "startupFrames": "19s cs1~",
        "blockFrames": "-17",
        "hitFrames": "-6",
        "counterHitFrames": "-6",
        "notes": ""
    },
    {
        "command": "FC+d/f+2, D/F",
        "hitLevel": "l (TC)(RDS)",
        "damage": "10",
        "startupFrames": "19bs cs1~",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "+3",
        "notes": ""
    },
    {
        "command": "FC+d/f+2, 1",
        "hitLevel": "l (TC), l (TC)",
        "damage": "10,14",
        "startupFrames": "s cs1~",
        "blockFrames": "-11",
        "hitFrames": "0",
        "counterHitFrames": "0",
        "notes": ""
    },
    {
        "command": "FC+d/f+2, 1, D/F",
        "hitLevel": "l (TC), l (TC)(RDS)",
        "damage": "10,14",
        "startupFrames": "bs cs1~",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "+3",
        "notes": ""
    },
    {
        "command": "FC+d/f+4",
        "hitLevel": "l (TC), (AOP)",
        "damage": "10",
        "startupFrames": "18~20 cs1~",
        "blockFrames": "-7~-5",
        "hitFrames": "+4~+6",
        "counterHitFrames": "+4~+6",
        "notes": ""
    },
    {
        "command": "FC+d/f+4, 4",
        "hitLevel": "l (TC), l (TC)",
        "damage": "10,10",
        "startupFrames": "s cs1~",
        "blockFrames": "-6~-4",
        "hitFrames": "+5~+7",
        "counterHitFrames": "+5~+7",
        "notes": ""
    },
    {
        "command": "SS+3",
        "hitLevel": "l (TC)",
        "damage": "23",
        "startupFrames": "27~28 (36~) cs6~",
        "blockFrames": "-23",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Homing"
    },
    {
        "command": "SS+3, d+1+2",
        "hitLevel": "l (TC), (AOP)",
        "damage": "23",
        "startupFrames": "27~28 (36~) cs6~",
        "blockFrames": "",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Homing"
    },
    {
        "command": "SS+3, b (Cancel)",
        "hitLevel": "(RDS)",
        "damage": "",
        "startupFrames": "bs",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "SS+4",
        "hitLevel": "l (TC)",
        "damage": "19",
        "startupFrames": "18~19s (27~) cs6~",
        "blockFrames": "-13~-12",
        "hitFrames": "-2~-1",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "1+3+4",
        "hitLevel": "(Special) (TJ)",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "2+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "d/b+1+2 (SSR)",
        "hitLevel": "(HYP)",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "u/b+1+2 (SSL)",
        "hitLevel": "(HYP)",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "HYP 1+2",
        "hitLevel": "(HYP)",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "HYP 1+4",
        "hitLevel": "(Special), Parry",
        "damage": "",
        "startupFrames": "18~19 (27~) 6~",
        "blockFrames": "",
        "hitFrames": "+5",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "HYP 2 (After on step)",
        "hitLevel": "m(HYP)",
        "damage": "25",
        "startupFrames": "22(42)",
        "blockFrames": "-4",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 2 (After two step)",
        "hitLevel": "m(HYP)",
        "damage": "30",
        "startupFrames": "22(67)",
        "blockFrames": "+5",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 2 (After three step)",
        "hitLevel": "m(HYP)",
        "damage": "35",
        "startupFrames": "22(92)",
        "blockFrames": "+24",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 4",
        "hitLevel": "h",
        "damage": "20",
        "startupFrames": "14~16 (34,51,84)",
        "blockFrames": "-4~-2",
        "hitFrames": "+1~+3",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "HYP 3+4",
        "hitLevel": "h (TJ)",
        "damage": "26",
        "startupFrames": "25~26a (45,70,95) js12~",
        "blockFrames": "+2~+3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 2+3 (After on step)",
        "hitLevel": "!?(HYP)",
        "damage": "40",
        "startupFrames": "61(81)",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 2+3 (After two step)",
        "hitLevel": "!?(HYP)",
        "damage": "50",
        "startupFrames": "61(106)",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "HYP 2+3 (After three step)",
        "hitLevel": "!?(HYP)",
        "damage": "60",
        "startupFrames": "61(131)",
        "blockFrames": "KND",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+3+4",
        "hitLevel": "(RDS)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "FC+d/b+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS u/f, f",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS u/f, f, D/F",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "s",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS 1",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "16~18",
        "blockFrames": "-5~-3",
        "hitFrames": "+4~+6",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "RDS 1, 4",
        "hitLevel": "m, h (TJ)",
        "damage": "17,24",
        "startupFrames": "js12~",
        "blockFrames": "-6~-3",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "RDS 2",
        "hitLevel": "h(RDS)",
        "damage": "9",
        "startupFrames": "12b",
        "blockFrames": "0",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "RDS 2, 1",
        "hitLevel": "h, h",
        "damage": "9,8",
        "startupFrames": "12",
        "blockFrames": "-1",
        "hitFrames": "+6",
        "counterHitFrames": "+10",
        "notes": ""
    },
    {
        "command": "RDS 2, 1, 4",
        "hitLevel": "h, h, m",
        "damage": "9,8,15",
        "startupFrames": "12",
        "blockFrames": "-18~-16",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "RDS 2, 2",
        "hitLevel": "h, m",
        "damage": "9,12",
        "startupFrames": "12b",
        "blockFrames": "-7~-5",
        "hitFrames": "+4~+6",
        "counterHitFrames": "+4~+6",
        "notes": ""
    },
    {
        "command": "RDS 2, 2, 1",
        "hitLevel": "h, m, mmm",
        "damage": "9,12,7,7,7",
        "startupFrames": "12s",
        "blockFrames": "-13~-7 (-18)",
        "hitFrames": "-2~+4s",
        "counterHitFrames": "-2~+4s",
        "notes": ""
    },
    {
        "command": "RDS 2, 2, 1, D",
        "hitLevel": "h, m, mmm, (AOP)",
        "damage": "9,12,7,7,7",
        "startupFrames": "12",
        "blockFrames": "-13~-7 (-18)",
        "hitFrames": "-2~+4s",
        "counterHitFrames": "-2~+4s",
        "notes": ""
    },
    {
        "command": "RDS 3",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "18~19b js9~",
        "blockFrames": "-19~-18",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS 4",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~15",
        "blockFrames": "-18~-16",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "RDS 1+2",
        "hitLevel": "mm",
        "damage": "6,6",
        "startupFrames": "16~18, 23~24",
        "blockFrames": "-5~-4",
        "hitFrames": "+6~+7",
        "counterHitFrames": "+6~+7",
        "notes": ""
    },
    {
        "command": "RDS 1+2, 1+2",
        "hitLevel": "mm, mm",
        "damage": "6,6,6,6",
        "startupFrames": "16~18, 23~24s",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1s",
        "counterHitFrames": "0~+1s",
        "notes": ""
    },
    {
        "command": "RDS 3+4 or u+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "16~18, 23~24",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS d+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "16~18, 23~24",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS 1+4",
        "hitLevel": "Parry(RDS)",
        "damage": "",
        "startupFrames": "1~",
        "blockFrames": "",
        "hitFrames": "+5",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS f+1+2",
        "hitLevel": "m(h or m punch parry)",
        "damage": "21",
        "startupFrames": "23",
        "blockFrames": "-8",
        "hitFrames": "+3(CS)",
        "counterHitFrames": "+5",
        "notes": ""
    },
    {
        "command": "RDS f+3+4",
        "hitLevel": "(Special)?(RDS)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS f+3+4, 3+4",
        "hitLevel": "m(RDS)",
        "damage": "23",
        "startupFrames": "12~13b (25~26) ar1~",
        "blockFrames": "-11~-10",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "RDS b+3+4",
        "hitLevel": "(RDS)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS d+3",
        "hitLevel": "l",
        "damage": "10",
        "startupFrames": "16",
        "blockFrames": "-12",
        "hitFrames": "+7s",
        "counterHitFrames": "+7s",
        "notes": ""
    },
    {
        "command": "RDS d+3, 4",
        "hitLevel": "l, h",
        "damage": "10,20",
        "startupFrames": "16",
        "blockFrames": "-5~-4",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin"
    },
    {
        "command": "RDS d+4",
        "hitLevel": "l",
        "damage": "21",
        "startupFrames": "24~26s cs8~",
        "blockFrames": "-26",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS d/b or d or d/f+1+2",
        "hitLevel": "(RDS)",
        "damage": "",
        "startupFrames": "24~26 8~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS d+1+4",
        "hitLevel": "Low parry(RDS)",
        "damage": "",
        "startupFrames": "1~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS d/b or d/f+4",
        "hitLevel": "l(!)(RDS)",
        "damage": "0",
        "startupFrames": "15",
        "blockFrames": "+2",
        "hitFrames": "+2s",
        "counterHitFrames": "+2s",
        "notes": ""
    },
    {
        "command": "RDS u or u/f+1",
        "hitLevel": "l (TJ), (Special)",
        "damage": "22",
        "startupFrames": "33~35 js9~23",
        "blockFrames": "-7~-5",
        "hitFrames": "+12~+14s",
        "counterHitFrames": "+12~+14s",
        "notes": ""
    },
    {
        "command": "RDS f, F+3",
        "hitLevel": "m (TJ)(RDS)",
        "damage": "18",
        "startupFrames": "16b(17~) js3~15",
        "blockFrames": "-5",
        "hitFrames": "+6",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS f, F+3+4",
        "hitLevel": "m (TJ)(, !(Throw))",
        "damage": "25(,20)",
        "startupFrames": "39~51 (47~) js10~",
        "blockFrames": "-3~+9",
        "hitFrames": "KND(Throw)",
        "counterHitFrames": "KND(Throw)",
        "notes": ""
    },
    {
        "command": "RDS 1+3 or 2+4",
        "hitLevel": "h(Throw)(RDS)",
        "damage": "35",
        "startupFrames": "12",
        "blockFrames": "",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "RDS f, F+1+3 or f, F+2+4",
        "hitLevel": "(Special) (TJ), h(Throw)(RDS)",
        "damage": "35",
        "startupFrames": "31a(32~) js1~26",
        "blockFrames": "",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "d+1+2 or FC+1+2 RDS d+1+2",
        "hitLevel": "(Special) (TC)(AOP)",
        "damage": "",
        "startupFrames": "(cs1)",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP 1",
        "hitLevel": "m",
        "damage": "11",
        "startupFrames": "18s",
        "blockFrames": "-5",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "AOP 1, 2",
        "hitLevel": "m, h",
        "damage": "11,15",
        "startupFrames": "18b",
        "blockFrames": "-6~-5",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "AOP 2",
        "hitLevel": "m",
        "damage": "10",
        "startupFrames": "13~14",
        "blockFrames": "-11~-10",
        "hitFrames": "0~+1",
        "counterHitFrames": "0~+1",
        "notes": ""
    },
    {
        "command": "AOP 2, 1",
        "hitLevel": "m, m",
        "damage": "10,20",
        "startupFrames": "13~14",
        "blockFrames": "-12~-11",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP 2, 1, b (Cancel)",
        "hitLevel": "m(RDS)",
        "damage": "10",
        "startupFrames": "13~14b",
        "blockFrames": "-14~-13",
        "hitFrames": "-3~-2",
        "counterHitFrames": "-3~-2",
        "notes": ""
    },
    {
        "command": "AOP 3",
        "hitLevel": "l (TC)",
        "damage": "19",
        "startupFrames": "25~30s cs1?~",
        "blockFrames": "-16~-11",
        "hitFrames": "0~+5",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP 4",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "12~13",
        "blockFrames": "-4~-3",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "AOP 4~3",
        "hitLevel": "l (TC)",
        "damage": "25",
        "startupFrames": "23~25s (a)(23) cs5?~",
        "blockFrames": "-33",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP 1+2",
        "hitLevel": "m",
        "damage": "24",
        "startupFrames": "19",
        "blockFrames": "-5",
        "hitFrames": "KND",
        "counterHitFrames": "CS",
        "notes": "Wall bounce"
    },
    {
        "command": "AOP 1+3 or 2+4",
        "hitLevel": "(Special) (TC), h(Throw)",
        "damage": "35",
        "startupFrames": "12(42)",
        "blockFrames": "",
        "hitFrames": "Throw(KND)",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP f+4",
        "hitLevel": "l (TC), (Special)",
        "damage": "10",
        "startupFrames": "18~20 cs1~",
        "blockFrames": "-7~-5",
        "hitFrames": "+4~+6",
        "counterHitFrames": "+4~+6",
        "notes": ""
    },
    {
        "command": "AOP f+4, 4",
        "hitLevel": "l (TC), l (TC)",
        "damage": "10,10",
        "startupFrames": "s cs1~",
        "blockFrames": "-6~-4",
        "hitFrames": "+5~+7",
        "counterHitFrames": "+5~+7",
        "notes": ""
    },
    {
        "command": "AOP d+1",
        "hitLevel": "l (TC)",
        "damage": "13(,25)",
        "startupFrames": "19~21s cs1~",
        "blockFrames": "-12~-10",
        "hitFrames": "-1~+1",
        "counterHitFrames": "KND(Throw) +19",
        "notes": ""
    },
    {
        "command": "AOP d+1+2",
        "hitLevel": "m",
        "damage": "21",
        "startupFrames": "26 cs1~25",
        "blockFrames": "-8",
        "hitFrames": "Launch(JG?)",
        "counterHitFrames": "Launch(JG?)",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f+3",
        "hitLevel": "m (TJ)",
        "damage": "14",
        "startupFrames": "15~17 js10~",
        "blockFrames": "-17~-15",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f+3, 1",
        "hitLevel": "m (TJ), m (TJ), (Special)",
        "damage": "14,22",
        "startupFrames": "js1~22",
        "blockFrames": "-4~-3",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "+7~+8s",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f+3, 3",
        "hitLevel": "m (TJ), h (TJ)",
        "damage": "14,25",
        "startupFrames": "js1~",
        "blockFrames": "-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f+3, 4",
        "hitLevel": "m (TJ), m",
        "damage": "14,19",
        "startupFrames": "js1~12",
        "blockFrames": "-14~-12",
        "hitFrames": "-3~-1",
        "counterHitFrames": "+22g(KND)",
        "notes": ""
    },
    {
        "command": "AOP u or u/f+4",
        "hitLevel": "m (TJ)",
        "damage": "12",
        "startupFrames": "16~26s js8~",
        "blockFrames": "-10~0",
        "hitFrames": "+1~+11",
        "counterHitFrames": "+1~+11",
        "notes": ""
    },
    {
        "command": "AOP u or u/f+4, B",
        "hitLevel": "m (TJ)(RDS)",
        "damage": "12",
        "startupFrames": "16~26b js8~",
        "blockFrames": "-15~-5",
        "hitFrames": "-4~+6",
        "counterHitFrames": "-4~+6",
        "notes": ""
    },
    {
        "command": "AOP u or u/f+4, d+1+2",
        "hitLevel": "m (TJ), (Special)",
        "damage": "12",
        "startupFrames": "16~26 js8~",
        "blockFrames": "-12~-2",
        "hitFrames": "-1~+9",
        "counterHitFrames": "-1~+9",
        "notes": ""
    },
    {
        "command": "AOP u or u/f+4, 4",
        "hitLevel": "m (TJ), m (TJ)",
        "damage": "12,12",
        "startupFrames": "s js18~",
        "blockFrames": "-12~0",
        "hitFrames": "-1~+11",
        "counterHitFrames": "-1~+11",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or U/F",
        "hitLevel": "(Special) (TJ)",
        "damage": "",
        "startupFrames": "js9~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f, n+3",
        "hitLevel": "m (TJ)",
        "damage": "30",
        "startupFrames": "12~16 (28~30) js1~",
        "blockFrames": "-23~-19",
        "hitFrames": "+6~+10b",
        "counterHitFrames": "+6~+10b",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f, n+3, d+1+2",
        "hitLevel": "m (TJ), (Special)",
        "damage": "30",
        "startupFrames": "12~16 (28~30) js1~",
        "blockFrames": "-10~-8",
        "hitFrames": "+19~+21b",
        "counterHitFrames": "+19~+21b",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f, n+4",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "8~9 (23~24) js1~",
        "blockFrames": "-8~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f(When landing)4",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "9~10 (40~41) js1~5",
        "blockFrames": "-10~-9",
        "hitFrames": "+1~+2",
        "counterHitFrames": "+1~+2",
        "notes": ""
    },
    {
        "command": "AOP u/b or u or u/f(When landing)3",
        "hitLevel": "l (TC)",
        "damage": "19",
        "startupFrames": "15~16s (46~47) js1~6 cs7~",
        "blockFrames": "-18~-17",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "AOP d/b or b or d/f or f",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "15~16 (46~47) 1~6 7~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP b, b or f, f",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "15~16 (46~47) 1~6 7~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP d",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "15~16 (46~47) 1~6 7~",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP b+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "b",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP f+3+4",
        "hitLevel": "(Special)",
        "damage": "",
        "startupFrames": "s",
        "blockFrames": "",
        "hitFrames": "",
        "counterHitFrames": "",
        "notes": ""
    },
    {
        "command": "AOP f+3+4, d+1+2",
        "hitLevel": "(Special) (TJ), (Special) (TC)(AOP)",
        "damage": "",
        "startupFrames": "",
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
        "command": "f+2",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "16~17",
        "blockFrames": "-7~-6",
        "hitFrames": "+4~+5",
        "counterHitFrames": "+4~+5",
        "notes": ""
    },
    {
        "command": "f+3",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "16~18",
        "blockFrames": "-9~-7",
        "hitFrames": "+2~+4",
        "counterHitFrames": "+2~+4",
        "notes": ""
    },
    {
        "command": "f+4",
        "hitLevel": "h",
        "damage": "23",
        "startupFrames": "19~20",
        "blockFrames": "+1~+2",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Tail spin, Homing"
    },
    {
        "command": "d/f+1",
        "hitLevel": "m (TC)(RDS)",
        "damage": "11",
        "startupFrames": "14b cs6~13",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "d/f+2",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "15",
        "blockFrames": "-6",
        "hitFrames": "+5a",
        "counterHitFrames": "+5a",
        "notes": ""
    },
    {
        "command": "d/f+3",
        "hitLevel": "h",
        "damage": "23",
        "startupFrames": "23~24 pc8~22",
        "blockFrames": "-8~-7",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Power crush"
    },
    {
        "command": "d/f+4",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "12",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "d+1",
        "hitLevel": "mmm",
        "damage": "7,7,7",
        "startupFrames": "17~19, 21~23, 26~32s",
        "blockFrames": "-9~-3",
        "hitFrames": "+2~+8s",
        "counterHitFrames": "+2~+8s",
        "notes": ""
    },
    {
        "command": "d/b or d+2",
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
        "startupFrames": "14s cs6~",
        "blockFrames": "-12",
        "hitFrames": "-3",
        "counterHitFrames": "+1",
        "notes": ""
    },
    {
        "command": "d+4",
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
        "hitLevel": "m",
        "damage": "30",
        "startupFrames": "18",
        "blockFrames": "-9",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "d/b or d+2",
        "hitLevel": "Sm (TC)",
        "damage": "9",
        "startupFrames": "11s cs4~",
        "blockFrames": "-4",
        "hitFrames": "+7",
        "counterHitFrames": "+7",
        "notes": ""
    },
    {
        "command": "d/b+3",
        "hitLevel": "l(!)",
        "damage": "0",
        "startupFrames": "15",
        "blockFrames": "+2",
        "hitFrames": "+2s",
        "counterHitFrames": "+2s",
        "notes": ""
    },
    {
        "command": "d/b+4",
        "hitLevel": "l",
        "damage": "12",
        "startupFrames": "18",
        "blockFrames": "-12",
        "hitFrames": "+7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+1",
        "hitLevel": "m(RDS)",
        "damage": "10",
        "startupFrames": "8~13(b)",
        "blockFrames": "",
        "hitFrames": "+1",
        "counterHitFrames": "+1",
        "notes": ""
    },
    {
        "command": "b+2",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "15~16b",
        "blockFrames": "-6~-5",
        "hitFrames": "+5~+6",
        "counterHitFrames": "+5~+6",
        "notes": "Homing"
    },
    {
        "command": "b+3",
        "hitLevel": "h",
        "damage": "22",
        "startupFrames": "18~19b",
        "blockFrames": "-4~-3",
        "hitFrames": "+7~+8s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "b+4",
        "hitLevel": "m",
        "damage": "14",
        "startupFrames": "13~15",
        "blockFrames": "-11~-9",
        "hitFrames": "0~+2",
        "counterHitFrames": "0~+2",
        "notes": ""
    },
    {
        "command": "u/b+1",
        "hitLevel": "m (TJ)",
        "damage": "12",
        "startupFrames": "18 js9~",
        "blockFrames": "-8",
        "hitFrames": "+3",
        "counterHitFrames": "+3",
        "notes": ""
    },
    {
        "command": "u or u/f+1",
        "hitLevel": "l (TJ), (AOP)",
        "damage": "15",
        "startupFrames": "33~35 js9~23",
        "blockFrames": "-7~-5",
        "hitFrames": "+10~+12s",
        "counterHitFrames": "+10~+12s",
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
        "command": "u/b+3",
        "hitLevel": "m",
        "damage": "11",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "-1~0",
        "counterHitFrames": "-1~0",
        "notes": ""
    },
    {
        "command": "u+3",
        "hitLevel": "m",
        "damage": "15",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "KND",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u/f+3",
        "hitLevel": "m",
        "damage": "13",
        "startupFrames": "16~17 js9~",
        "blockFrames": "-13~-12",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "u/b+4",
        "hitLevel": "m (TJ)",
        "damage": "15",
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
        "startupFrames": "23~26 js9~",
        "blockFrames": "-7~-4",
        "hitFrames": "+4~+7s",
        "counterHitFrames": "KND (+4~+7s)",
        "notes": ""
    },
    {
        "command": "u/f+4",
        "hitLevel": "m (TJ)",
        "damage": "23",
        "startupFrames": "23~26 js9~",
        "blockFrames": "-3~0",
        "hitFrames": "+8~+11s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "u/f, n+4",
        "hitLevel": "m",
        "damage": "25",
        "startupFrames": "23(30,36) js9~33",
        "blockFrames": "-18(-17)",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+1",
        "hitLevel": "m",
        "damage": "12",
        "startupFrames": "11~12",
        "blockFrames": "-4~-3",
        "hitFrames": "+7~+8",
        "counterHitFrames": "+7~+8",
        "notes": ""
    },
    {
        "command": "WS+2",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~15b",
        "blockFrames": "-4~-2",
        "hitFrames": "+7~+9",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "WS+3",
        "hitLevel": "m",
        "damage": "22",
        "startupFrames": "22~23",
        "blockFrames": "+3~+4s",
        "hitFrames": "+6~+7s (KND)",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "WS+4",
        "hitLevel": "m",
        "damage": "20",
        "startupFrames": "11~13",
        "blockFrames": "-10~-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
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
        "damage": "11",
        "startupFrames": "15~17s cs1~",
        "blockFrames": "-15~-13",
        "hitFrames": "-4~-2",
        "counterHitFrames": "-4~-2",
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
        "damage": "8",
        "startupFrames": "10(11~)",
        "blockFrames": "-2",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "SS+3",
        "hitLevel": "l (TC)",
        "damage": "23",
        "startupFrames": "27~28 (36~) cs6~",
        "blockFrames": "-23",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": "Homing"
    },
    {
        "command": "SS+4",
        "hitLevel": "l (TC)",
        "damage": "19",
        "startupFrames": "18~19s (27~) cs6~",
        "blockFrames": "-13~-12",
        "hitFrames": "-2~-1",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS 1",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "16~18",
        "blockFrames": "-5~-3",
        "hitFrames": "+4~+6",
        "counterHitFrames": "CS",
        "notes": ""
    },
    {
        "command": "RDS 2",
        "hitLevel": "h",
        "damage": "9",
        "startupFrames": "12b",
        "blockFrames": "0",
        "hitFrames": "+6",
        "counterHitFrames": "+6",
        "notes": ""
    },
    {
        "command": "RDS 3",
        "hitLevel": "m (TJ)",
        "damage": "25",
        "startupFrames": "18~19b js9~",
        "blockFrames": "-19~-18",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS 4",
        "hitLevel": "m",
        "damage": "17",
        "startupFrames": "13~15",
        "blockFrames": "-18~-16",
        "hitFrames": "Launch (JG?)",
        "counterHitFrames": "Launch (JG?)",
        "notes": ""
    },
    {
        "command": "RDS b+3",
        "hitLevel": "h",
        "damage": "25",
        "startupFrames": "10",
        "blockFrames": "-8",
        "hitFrames": "KND",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS d+1 or 2",
        "hitLevel": "Sm",
        "damage": "10",
        "startupFrames": "10s cs1~",
        "blockFrames": "-2",
        "hitFrames": "+9",
        "counterHitFrames": "+9",
        "notes": ""
    },
    {
        "command": "RDS d+3",
        "hitLevel": "l",
        "damage": "10",
        "startupFrames": "16",
        "blockFrames": "-12",
        "hitFrames": "+7s",
        "counterHitFrames": "+7s",
        "notes": ""
    },
    {
        "command": "RDS d+4",
        "hitLevel": "l",
        "damage": "19",
        "startupFrames": "24~26s cs8~",
        "blockFrames": "-26",
        "hitFrames": "+5~+7s",
        "counterHitFrames": "KND",
        "notes": ""
    },
    {
        "command": "RDS d/b or d/f+4",
        "hitLevel": "l(!)(RDS)",
        "damage": "0",
        "startupFrames": "15",
        "blockFrames": "+2",
        "hitFrames": "+2s",
        "counterHitFrames": "+2s",
        "notes": ""
    }
];