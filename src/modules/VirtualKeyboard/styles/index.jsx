import { ScaledSheet, scale } from "react-native-size-matters";

const kbStyles = ScaledSheet.create({
  button: {
    width: '30@s',
    height: '40@s',
    alignItems: 'center',
    borderRadius: '3@s',
    justifyContent: 'center',
    backgroundColor: 'rgb(227, 227, 227)',
    marginHorizontal: '2@s',
  },
  withIcon: {
    width: '63@s',
  },
  buttonText: {
    fontSize: '14@s'
  },
  keyboardRow: {
    flexDirection: 'row',
    marginBottom: '5@s',
    justifyContent: 'center'
  },
  buttonUnderlay: 'rgba(0,0,0,0.2)',
  buttonIconSize: scale(14),
})

export default kbStyles