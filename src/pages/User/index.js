import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  ContainerLoading,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
    loadingList: false,
  };

  async componentDidMount() {
    const { page } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    this.setState({ loading: true });

    const response = await api.get(
      `/users/${user.login}/starred?page=${page}&per_page=4`
    );

    this.setState({ stars: response.data, loading: false });
  }

  getData = async () => {
    const { page, stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    this.setState({ loadingList: true });
    const newStars = await api.get(
      `/users/${user.login}/starred?page=${page}&per_page=4`
    );
    this.setState({ stars: [...stars, ...newStars.data], loadingList: false });
  };

  handleLoadMore = () => {
    console.log('fui chamada');
    const { page } = this.state;
    this.setState({ page: page + 1 }, this.getData);
  };

  renderFooter = () => {
    const { loadingList } = this.state;
    return loadingList ? (
      <View
        styles={{
          marginTop: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator color="#7159c1" size="large" />
      </View>
    ) : null;
  };

  render() {
    const { stars, loading } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ContainerLoading>
            <ActivityIndicator color="#7159c1" size={50} />
          </ContainerLoading>
        ) : (
          <Stars
            extraData={this.state}
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.01}
            ListFooterComponent={this.renderFooter}
          />
        )}
      </Container>
    );
  }
}
