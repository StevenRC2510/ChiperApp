import React from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';

import {PostTypes} from '@app/interfaces/posts';
import {styles} from './styles';

export const Card = ({
  title,
  score,
  thumbnail,
  likes,
  author_fullname,
}: PostTypes) => {
  const emptyImageUri = 'https://static.thenounproject.com/png/2932881-200.png';

  return (
    <TouchableOpacity
      testID={`card-${title}`}
      style={styles.cardContainer}
      onPress={() => Linking.openURL(thumbnail)}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: thumbnail ?? emptyImageUri,
          }}
        />
      </View>
      <View style={styles.rightContent}>
        <View style={styles.topContainer}>
          <Text style={styles.Text}>1 day ago</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.boldText}>{title} </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.dataContainer}>
            <Text style={styles.Text}>{author_fullname}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.Text}>Score: {score}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.Text}>{likes ?? 0} likes</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
