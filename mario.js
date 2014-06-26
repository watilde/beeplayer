function mario(option) {
  var bpm = option.bpm || 120;
  var first = beeplay({bpm: bpm})
    // P1
    .play('E5', 1/4).play('E5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null,1/4).play('C5', 1/4).play('E5', 1/4).play(null, 1/4)
    .play('G5', 1/4).play(null, 1/4).play(null, 1/4).play(null, 1/4)
    .play(null, 1)

    // p2
    .play('C5', 1/4).play(null, 1/2).play('G4', 1/4)
    .play(null, 1/2).play('E4', 1/4).play(null, 1/2)
    .play('A4', 1/4).play(null, 1/4).play('B4', 1/4)
    .play(null, 1/4).play('A#4', 1/4).play('A4', 1/4).play(null, 1/4)

    // P3
    .play('G4', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 1/16)
    .play('A5', 1/4).play(null, 1/4).play('F5', 1/4).play('G5', 1/4)
    .play(null, 1/4).play('E5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play('D5', 1/4).play('B4', 1/4).play(null, 1/2)

    // P4
    .play('C5', 1/4).play(null, 1/2).play('G4', 1/4)
    .play(null, 1/2).play('E4', 1/4).play(null, 1/2)
    .play('A4', 1/4).play(null, 1/4).play('B4', 1/4)
    .play(null, 1/4).play('A#4', 1/4).play('A4', 1/4).play(null, 1/4)

    // P5
    .play('G4', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 1/16)
    .play('A5', 1/4).play(null, 1/4).play('F5', 1/4).play('G5', 1/4)
    .play(null, 1/4).play('E5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play('D5', 1/4).play('B4', 1/4).play(null, 1/2)

    // P6
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('G#4', 1/4).play('A4', 1/4).play('C5', 1/4)
    .play(null, 1/4).play('A4', 1/4).play('C5', 1/4).play('D5', 1/4)

    // P7
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('C6', 1/4).play(null, 1/4).play('C6', 1/4)
    .play('C6', 1/4).play(null, 3/4)

    // P8
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('G#4', 1/4).play('A4', 1/4).play('C5', 1/4)
    .play(null, 1/4).play('A4', 1/4).play('C5', 1/4).play('D5', 1/4)

    // P9
    .play(null, 1/2).play('D#5', 1/4).play(null, 1/2)
    .play('D5', 1/4).play(null, 1/2)
    .play('C5', 1/4) .play(null, 3/4)
    .play(null, 1)

    // P10
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('G#4', 1/4).play('A4', 1/4).play('C5', 1/4)
    .play(null, 1/4).play('A4', 1/4).play('C5', 1/4).play('D5', 1/4)

    // P11
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('C6', 1/4).play(null, 1/4).play('C6', 1/4)
    .play('C6', 1/4).play(null, 3/4)

    // P12
    .play(null, 1/2).play('G5', 1/4).play('F#5', 1/4)
    .play('F5', 1/4).play('D#5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('G#4', 1/4).play('A4', 1/4).play('C5', 1/4)
    .play(null, 1/4).play('A4', 1/4).play('C5', 1/4).play('D5', 1/4)

    // P13
    .play(null, 1/2).play('D#5', 1/4).play(null, 1/2)
    .play('D5', 1/4).play(null, 1/2)
    .play('C5', 1/4) .play(null, 3/4)
    .play(null, 1)

    // P14
    .play('C5', 1/4).play('C5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play(null, 1/4).play('C5', 1/4).play('D5', 1/4).play(null, 1/4)
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('A4', 1/4)
    .play('G4', 1/4).play(null, 1/4).play(null, 1/2)

    // P15
    .play('C5', 1/4).play('C5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play(null, 1/4).play('C5', 1/4).play('D5', 1/4).play('E5', 1/4)
    .play(null, 2)

    // P16
    .play('C5', 1/4).play('C5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play(null, 1/4).play('C5', 1/4).play('D5', 1/4).play(null, 1/4)
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('A4', 1/4)
    .play('G4', 1/4).play(null, 1/4).play(null, 1/2)

    // P17
    .play('E5', 1/4).play('E5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/4).play('C5', 1/4).play('E5', 1/4).play(null, 1/4)
    .play('G5', 1/4).play(null, 3/4)
    .play(null, 1)

    // P18
    .play('C5', 1/4).play(null, 1/2).play('G4', 1/4)
    .play(null, 1/2).play('E4', 1/4).play(null, 1/2)
    .play('A4', 1/4).play(null, 1/4).play('B4', 1/4)
    .play(null, 1/4).play('A#4', 1/4).play('A4', 1/4).play(null, 1/4)

    // P19
    .play('G4', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 1/16)
    .play('A5', 1/4).play(null, 1/4).play('F5', 1/4).play('G5', 1/4)
    .play(null, 1/4).play('E5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play('D5', 1/4).play('B4', 1/4).play(null, 1/2)

    // P20
    .play('C5', 1/4).play(null, 1/2).play('G4', 1/4)
    .play(null, 1/2).play('E4', 1/4).play(null, 1/2)
    .play('A4', 1/4).play(null, 1/4).play('B4', 1/4)
    .play(null, 1/4).play('A#4', 1/4).play('A4', 1/4).play(null, 1/4)

    // P21
    .play('G4', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 1/16)
    .play('A5', 1/4).play(null, 1/4).play('F5', 1/4).play('G5', 1/4)
    .play(null, 1/4).play('E5', 1/4).play(null, 1/4).play('C5', 1/4)
    .play('D5', 1/4).play('B4', 1/4).play(null, 1/2)

    // P22
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/2).play('G#4', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('A4', 1/4).play(null, 3/4)

    // P23
    .play('B4', 3/16).play(null, 3/16).play('A5', 3/16).play(null, 3/16).play('A5', 3/16).play(null, 1/16)
    .play('A5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 3/16).play('F5', 3/16).play(null, 1/16)
    .play(null, 1/4).play('E5', 1/4).play('C5', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('G4', 1/4).play(null, 1/4).play(null, 1/4)

    // P24
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/2).play('G#4', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('A4', 1/4).play(null, 3/4)

    // P25
    .play('B4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('F5', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('D5', 3/16).play(null, 1/16)
    .play('C5', 1/4).play(null, 3/4)
    .play(null, 1)

    // P26
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/2).play('G#4', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('A4', 1/4).play(null, 3/4)

    // P27
    .play('B4', 3/16).play(null, 3/16).play('A5', 3/16).play(null, 3/16).play('A5', 3/16).play(null, 1/16)
    .play('A5', 3/16).play(null, 3/16).play('G5', 3/16).play(null, 3/16).play('F5', 3/16).play(null, 1/16)
    .play(null, 1/4).play('E5', 1/4).play('C5', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('G4', 1/4).play(null, 1/4).play(null, 1/4)

    // P28
    .play('E5', 1/4).play('C5', 1/4).play(null, 1/4).play('E5', 1/4)
    .play(null, 1/2).play('G#4', 1/4).play(null, 1/4)
    .play('A4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('A4', 1/4).play(null, 3/4)

    // P29
    .play('B4', 1/4).play('F5', 1/4).play(null, 1/4).play('F5', 1/4)
    .play('F5', 3/16).play(null, 3/16).play('E5', 3/16).play(null, 3/16).play('D5', 3/16).play(null, 1/16)
    .play('C5', 1/4).play(null, 3/4)
    .play(null, 1)

}