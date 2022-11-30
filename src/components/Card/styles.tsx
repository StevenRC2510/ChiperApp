import {StyleSheet} from 'react-native';

import {colors} from '@app/styles/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    width: '95%',
    height: 110,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerImage: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    backgroundColor: 'transparent',
    flex: 7,
  },
  titleContainer: {
    width: '100%',
    height: '50%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  topContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingTop: 5,
  },
  bottomContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  Text: {
    fontSize: 12,
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700',
  },
  dataContainer: {
    width: '30%',
    height: '100%',
    borderColor: 'black',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
