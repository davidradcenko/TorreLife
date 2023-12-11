import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = ({ title, onPress }) => {
  const handlePress = () => {
    onPress(); // Вызывается функция onPress извне, например, для навигации
  };

  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={handlePress}
      activeOpacity={0.7}
      delayPressIn={50} // Задержка перед началом анимации
      delayPressOut={50} // Задержка перед окончанием анимации
    >
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );
};

const MainMenu = () => {
  const navigateToPage = (pageName) => {
    // Реализуйте навигацию на другую страницу
    console.log(`Navigate to ${pageName}`);
  };

  return (
    <View style={styles.container}>
      <MenuItem title="Главная" onPress={() => navigateToPage('Главная')} />
      <MenuItem title="Настройки" onPress={() => navigateToPage('Настройки')} />
      {/* Добавьте другие пункты меню, если необходимо */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#3498db', // Цвет блока меню
    borderRadius: 10,
  },
  menuItemText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainMenu;