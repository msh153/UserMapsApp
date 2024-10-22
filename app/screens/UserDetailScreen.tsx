import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, User } from '../types';

type UserDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'UserDetail'>;
};

const UserDetailScreen: React.FC<UserDetailScreenProps> = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Address: {user.address.street}, {user.address.city}</Text>

      <MapView
        style={{ width: '100%', height: 300 }}
        initialRegion={{
          latitude: parseFloat(user.address.geo.lat),
          longitude: parseFloat(user.address.geo.lng),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(user.address.geo.lat),
            longitude: parseFloat(user.address.geo.lng),
          }}
          title={user.name}
          description={user.address.city}
        />
      </MapView>
    </View>
  );
};

export default UserDetailScreen;
