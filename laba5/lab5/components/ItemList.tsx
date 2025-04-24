import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button, TextInput, Switch, ActivityIndicator,} from 'react-native';

interface Item {
  id: string;
  name: string;
  price: number;
}

const initialData: Item[] = [  // Task A: 1. Define at least 10 items
  { id: '1', name: 'Samsung Galaxy S23', price: 45705 },
  { id: '2', name: 'iPhone 15', price: 49860 },
  { id: '3', name: 'Google Pixel 8', price: 39470 },
  { id: '4', name: 'Xiaomi 13', price: 36200 },
  { id: '5', name: 'OnePlus 11', price: 41500 },
  { id: '6', name: 'Sony Xperia 5 V', price: 43620 },
  { id: '7', name: 'Motorola Edge 40', price: 33240 },
  { id: '8', name: 'Nokia XR21', price: 31100 },
  { id: '9', name: 'ASUS ROG Phone 7', price: 54000 },
  { id: '10', name: 'Realme GT 5', price: 36900 },
];

export const ItemList = () => {
  const [items, setItems] = useState<Item[]>(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleDelete = (id: string) => {   // Task A: 3. Delete item
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleSort = () => {  // Task B: 2. Toggle sort
    setSortAsc(prev => !prev);
  };

  const onRefresh = () => {    // Task C: 1. Pull to refresh
    setRefreshing(true);
    setTimeout(() => {
      setItems([...initialData]);
      setRefreshing(false);
    }, 1500);
  };

  const loadMoreItems = () => {   // Task C: 2. Lazy loading
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 5 }, (_, i) => ({
        id: (items.length + i + 1).toString(),
        name: `New Phone ${items.length + i + 1}`,
        price: Math.floor(Math.random() * 20000) + 25000,
      }));
      setItems(prev => [...prev, ...newItems]);
      setLoadingMore(false);
    }, 1500);
  };

  const filteredItems = items.filter(item =>    
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );    // Task B: 1. Search bar - filter items

  const sortedItems = [...filteredItems].sort((a, b) =>     
    sortAsc ? a.price - b.price : b.price - a.price
  );   // Task B: 2. Sort items

  const renderItem = ({ item }: { item: Item }) => (     // Task A: 2. Render and style each item row
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price} грн</Text>
      </View>
      <Button title="X" color="crimson" onPress={() => handleDelete(item.id)} />    
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort by Price</Text>
          <Switch value={sortAsc} onValueChange={toggleSort} />
        </View>
      </View>

      {sortedItems.length === 0 ? (  //Task B: 3. No items found message
        <Text style={styles.noItemsText}>No items found.</Text>
      ) : (
        <FlatList
          data={sortedItems}
          keyExtractor={(item) => item.id}   //Task A: 1. Use the keyExtractor prop
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator size="large" color="#000" /> : null
          }
        />
      )}
    </View>
  );
};

// Task A: 2. Styling for list rows
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e7cafa',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  input: {
    backgroundColor: '#dfd0f2',
    margin: 16,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  controls: {
    backgroundColor: '#fff',
    elevation: 2,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  sortText: {
    fontSize: 16,
    marginRight: 10,
  },
  noItemsText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
    color: '#6e5099',
  },
});
