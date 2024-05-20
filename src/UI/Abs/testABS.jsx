import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const SlidingModal = ({ visible, onClose }) => {
  const [animatedValue] = useState(new Animated.Value(0));

  const slideIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(onClose);
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={slideOut} // Обработка закрытия модального окна на Android
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { transform: [{ translateY }] }]}>
          <Text>Ваше содержимое модального окна</Text>
          <TouchableOpacity onPress={slideOut}>
            <Text>Закрыть</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const YourComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Остальная часть вашего интерфейса */}

      <TouchableOpacity onPress={openModal}>
        <Text>Открыть модальное окно</Text>
      </TouchableOpacity>

      <SlidingModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение фона
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default YourComponent;