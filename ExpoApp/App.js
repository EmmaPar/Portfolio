import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';

const images = [
  require('./assets/bookedevents.png'),
  require('./assets/allevents.png'),
  require('./assets/register.png'),
  require('./assets/Basicprofile.png'),
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };
  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row' }}>
      {/* Left Arrow in yellow box */}
      <TouchableOpacity
        onPress={goToPrev}
        disabled={currentIndex === 0}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
          width: 48,
        }}
      >
        <Text style={{ fontSize: 48, color: currentIndex === 0 ? '#ccc' : '#c75ab8ff' }}>{'<'}</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '88%' }}>
        <Image
          source={images[currentIndex]}
          style={{
            width: '100%',
            height: '75%',
            borderRadius: 24,
            resizeMode: 'cover',
            backgroundColor: '#fffde7ff',
          }}
        />
        <Text style={{ marginTop: 18, color: '#c75ab8ff', fontSize: 16, textAlign: 'center' }}>
          Image {currentIndex + 1} of {images.length}
        </Text>
        <Text style={{ marginTop: 8, color: '#c75ab8ff', fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: -4 }}>
          screens i worked on
        </Text>
      </View>

      <TouchableOpacity
        onPress={goToNext}
        disabled={currentIndex === images.length - 1}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
          width: 48,
        }}
      >
        <Text style={{ fontSize: 48, color: currentIndex === images.length - 1 ? '#ccc' : '#c75ab8ff' }}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.pageRow}>
      <ScrollView style={styles.background} contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Emma Parviainen</Text>
          <Text style={styles.bio}>Passionate developer and designer. Loves CSS and creating beautiful user experiences.</Text>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Project Title</Text>
            <Text style={styles.cardDesc}>Worked on GatherHub and own school + private projects</Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.skill}>React Native</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>UI/UX Design</Text>
          <Text style={styles.skill}>CSS</Text>
          <Text style={styles.skill}>Expo</Text>
          <Text style={styles.skill}>HTML</Text>
          <Text style={styles.skill}>C#</Text>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacts</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:emma.parviainen10@gmail.com')}>
            <Text style={styles.contactLink}>Email Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/EmmaPar?tab=repositories')}>
            <Text style={styles.contactLink}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/not-found-97857b338/')}>
            <Text style={styles.contactLink}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
      {/* Big yellow box on the right */}
      <View style={styles.rightYellowBox}>
        {/* Pink box inside yellow box */}
        <View style={styles.innerPinkBox}>
          {/* Image Slider with Arrows */}
          <ImageSlider />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageRow: {
    flex: 1,
    flexDirection: 'row',
    minHeight: '100%',
    backgroundColor: '#ffe3f3ff',
    position: 'relative',
  },
  background: {
    backgroundColor: '#ffe3f3ff', 
  },
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    width: '80%',
    minWidth: 320,
    maxWidth: 1200,
  },
rightYellowBox: {
  width: '50%',
  marginTop: 170,
  marginRight: 30,
  marginLeft: 20,
  marginBottom: 40,
  backgroundColor: '#fffde7ff',
  borderRadius: 16,
  padding: 30,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#FFD1DC',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
},
innerPinkBox: {
  width: '90%',       
  height: '85%',
  backgroundColor: '#ffe3f3ff',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
},
  profileSection: {
    alignItems: 'flex-start',
    marginBottom: 32,
    marginLeft: -40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#fffde7ff', 
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff7ceeff', 
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 8,
  },
  section: {
    width: '100%',
    maxWidth: 5000,
    alignSelf: 'flex-start',
    marginBottom: 32,
    marginLeft: 30,
    backgroundColor: '#fffde7ff',
    borderRadius: 16,
    padding: 16,
    minHeight: 170,
    shadowColor: '#FFD1DC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff7cee',
    marginBottom: 12,
    textAlign: 'left',
  },
  card: {
    backgroundColor: '#ffe3f3ff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    width: '100%',
    alignSelf: 'stretch',
    shadowColor: '#ff7cee',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff7cee',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: '#333',
  },
  skill: {
    fontSize: 16,
    color: '#c75ab8ff',
    marginBottom: 6,
    textAlign: 'left',
  },
  contactLink: {
    fontSize: 16,
    color: '#c75ab8ff',
    textDecorationLine: 'underline',
    marginBottom: 8,
    textAlign: 'left',
  },
});
