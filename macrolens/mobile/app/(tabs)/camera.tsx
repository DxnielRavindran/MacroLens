import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<CameraView>(null);

    // Handle loading state while checking permissions
    if (!permission) {
        return <View style={styles.container} />;
    }

    // If permission is denied, show a button to request it
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }


    async function takePicture() {
        console.log('ref:', cameraRef.current);
        const photo = await cameraRef.current?.takePictureAsync();
        console.log('photo:', photo);
        if (photo) {
            setPhotoUri(photo.uri);
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.viewfinder} facing="back" ref={cameraRef}>
                <View style={styles.overlayContainer}>
                    <View style={styles.targetBox} />
                </View>
            </CameraView>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture} />

            <View style={styles.previewArea}>
                {photoUri ? (
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                ) : (
                    <Text style={styles.previewText}>Photo preview will appear here</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        fontSize: 16,
    },
    viewfinder: {
        flex: 1,
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    targetBox: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 12,
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 20,
    },
    previewArea: {
        height: 150,
        backgroundColor: '#222',
        margin: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    previewText: {
        color: '#666',
        fontSize: 14,
    },
    previewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
});
