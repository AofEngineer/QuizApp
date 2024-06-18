/* eslint-disable prettier/prettier */

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { getRandomQuestions, Question } from '../utils/questions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '../navigation/types';

const HomeScreen = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Map<number, string>>(new Map());
  const navigation = useNavigation<NavigationProp>();


  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);


  useFocusEffect(
    useCallback(() => {
      setQuestions(getRandomQuestions());
      setSelectedAnswers(new Map());
    }, [])
  );

  const handleAnswerSelect = (index: number, answer: string) => {
    setSelectedAnswers(prev => new Map(prev).set(index, answer));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers.get(index) === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    Alert.alert('Quiz Completed', `Your score is ${score} out of ${questions.length}`);

    try {
      const data = await AsyncStorage.getItem('leaderboard');
      const leaderboard = data ? JSON.parse(data) : [];
      leaderboard.push({ name: 'Player', score });
      await AsyncStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error(error);
    }

    navigation.navigate('Leaderboard');
  };

  const renderItem = ({ item, index }: { item: Question; index: number }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{item.question}</Text>
      {item.answers.map((answer, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.answerButton,
            selectedAnswers.get(index) === answer && styles.selectedAnswer,
          ]}
          onPress={() => handleAnswerSelect(index, answer)}
        >
          <Text style={styles.answer}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4() as string}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Go to Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answerButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedAnswer: {
    backgroundColor: '#c0c0c0',
  },
  answer: {
    fontSize: 16,
  },
});

export default HomeScreen;
