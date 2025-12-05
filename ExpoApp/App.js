import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';


export default function App() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Emma Parviainen</Text>
        <Text style={styles.bio}>A short bio about yourself goes here. Passionate developer and designer.</Text>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Project Title</Text>
          <Text style={styles.cardDesc}>Brief description of your project. You can add more cards for other projects.</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>JavaScript</Text>
        <Text style={styles.skill}>UI/UX Design</Text>
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
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffe3f3ff', 
  },
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
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
    textAlign: 'center',
    marginBottom: 8,
  },
  section: {
    width: '100%',
    marginBottom: 32,
    backgroundColor: '#fffde7ff', 
    borderRadius: 16,
    padding: 16,
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
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffe3f3ff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
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
    color: '#ff7cee',
    marginBottom: 6,
    textAlign: 'center',
  },
  contactLink: {
    fontSize: 16,
    color: '#ff7cee',
    textDecorationLine: 'underline',
    marginBottom: 8,
    textAlign: 'center',
  },
});
