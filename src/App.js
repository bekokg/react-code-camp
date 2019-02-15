import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import Home from './components/pages/Home';
import Devices from './components/pages/Devices';
import Footer from './components/Footer';
import Model from './components/pages/Model';
import Issue from './components/pages/Issue';
import Colors from './components/pages/Colors';
import Product from './todoReact';

const data = {
  iphone: {
    name: 'iPhone',
    title: 'Select iPhone Model',
    data: {
      '8-Plus': {
        name: '8 Plus',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              }
            }
          },
          red: {
            title: 'Select Issue Type',
            name: 'Red',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              }
            }
          }
        }
      },
      '8': {
        name: '8',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 69
              },
              'charging-port': {
                name: 'Charging Port',
                price: 69
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 69
              },
              'charging-port': {
                name: 'Charging Port',
                price: 69
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 69
              },
              'charging-port': {
                name: 'Charging Port',
                price: 69
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          red: {
            title: 'Select Issue Type',
            name: 'Red',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 85
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 69
              },
              'charging-port': {
                name: 'Charging Port',
                price: 69
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          }
        }
      },
      '7-Plus': {
        name: '7 Plus',
        title: 'Select iPhone Color',
        data: {
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          'rose-gold': {
            title: 'Select Issue Type',
            name: 'Rose Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          black: {
            title: 'Select Issue Type',
            name: 'Black',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          'jet-black': {
            title: 'Select Issue Type',
            name: 'Jet Black',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          },
          red: {
            title: 'Select Issue Type',
            name: 'Red',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 65
              },
              'back-camera': {
                name: 'Back Camera',
                price: 159
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 65
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              }
            }
          }
        }
      },
      '7': {
        name: '7',
        title: 'Select iPhone Color',
        data: {
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          },
          'rose-gold': {
            title: 'Select Issue Type',
            name: 'Rose Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          },
          black: {
            title: 'Select Issue Type',
            name: 'Black',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          },
          'jet-black': {
            title: 'Select Issue Type',
            name: 'Jet Black',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          },
          red: {
            title: 'Select Issue Type',
            name: 'Red',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              },
              'loud-speaker': {
                name: 'Loud Speaker',
                price: 59
              }
            }
          }
        }
      },
      '6s-plus': {
        name: '6s Plus',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          'rose-gold': {
            title: 'Select Issue Type',
            name: 'Rose Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 89
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      },
      '6s': {
        name: '6s',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 65
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 65
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          'rose-gold': {
            title: 'Select Issue Type',
            name: 'Rose Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 65
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 65
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      },
      '6-plus': {
        name: '6 Plus',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 69
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      },
      '6': {
        name: '6',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      },
      se: {
        name: 'SE',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 79
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 79
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          'rose-gold': {
            title: 'Select Issue Type',
            name: 'Rose Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 79
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 79
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      },
      '5/5c/5s': {
        name: '5/5C/5S',
        title: 'Select iPhone Color',
        data: {
          'space-gray': {
            title: 'Select Issue Type',
            name: 'Space Gray',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              'battery': {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          gold: {
            title: 'Select Issue Type',
            name: 'Gold',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          },
          silver: {
            title: 'Select Issue Type',
            name: 'Silver',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 59
              },
              battery: {
                name: 'Battery',
                price: 59
              },
              'back-camera': {
                name: 'Back Camera',
                price: 59
              },
              'fron-camera': {
                name: 'Front Camera',
                price: 59
              },
              'home-button': {
                name: 'Home Button',
                price: 59
              },
              'charging-port': {
                name: 'Charging Port',
                price: 59
              },
              'side-buttons': {
                name: 'Side Buttons',
                price: 59
              },
              'internal-speakers': {
                name: 'Internal Speakers',
                price: 59
              },
              'power-button': {
                name: 'Power Button',
                price: 59
              },
              'headphone-plug': {
                name: 'Headphone Plug',
                price: 59
              }
            }
          }
        }
      }
    }
  },

  ipad: {
     name: 'iPad',
     title: 'Select iPad Model',
     data: {
      'pro-12-3': {
        name: 'iPad Pro 12.9(3rd gen.)',
        title: 'Select iPad Color',
        data: {
          'silver': {
            name: 'Silver',
            title: 'Select Issue Type',
            data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          }
        }       
      },
      'pro-11': {
        name: 'iPad Pro (11-inch)',
        title: 'Select iPad Color',
        data: {
          'silver': {
            name: 'Silver',
            title: 'Select Issue Type',
            data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          }
        }       
      },
      'pro-12-2': {
        name: 'iPad Pro 12.9(2nd gen.)',
        title: 'Select iPad Color',
        data: {
          'silver': {
            name: 'Silver',
            title: 'Select Issue Type',
            data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },        
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          }
        }       
      },
      'pro-10': {
        name: 'iPad Pro (10.5-inch)',
        title: 'Select iPad Color',
        data: {
          'silver': {
            name: 'Silver',
            title: 'Select Issue Type',
            data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },        
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'rose-gold': {
          name: 'Rose Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          }
        }       
      },
      'pro-9': {
        name: 'iPad Pro (9.7-inch)',
        title: 'Select iPad Color',
        data: {
          'silver': {
            name: 'Silver',
            title: 'Select Issue Type',
            data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },        
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
        'rose-gold': {
          name: 'Rose Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          }
        }       
      },
      'pro': {
       name: 'iPad Pro (12.9-inch)',
       title: 'Select iPad Color',
       data: {
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
          'space-gray': {
            name: 'Space Gray',
            title: 'Select Issue Type',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 325
                }
              }
          },        
          'gold': {
            name: 'Gold',
            title: 'Select Issue Type',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 325
                }
              }
          }
        }       
      },
      'air-2': {
       name: 'iPad Air 2',
       title: 'Select iPad Color',
       data: {
        silver: {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 325
              }
            }
          },
          'space-gray': {
            name: 'Space Gray',
            title: 'Select Issue Type',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 325
                }
              }
          },        
          'gold': {
            name: 'Gold',
            title: 'Select Issue Type',
            data: {
              'screen-repair': {
                name: 'Screen Repair',
                price: 325
                }
              }
          }
        }       
      },           
      air: {
       name: 'iPad Air',
       title: 'Select iPad Color',
       data: {
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        }
      }
    },   
    'mini-4': {
       name: 'iPad Mini 4',
       title: 'Select iPad Color',
       data: {
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
          'screen-repair': {
            name: 'Screen Repair',
            price: 215
            }
          }
        },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
          'screen-repair': {
            name: 'Screen Repair',
            price: 215
            }
          }
        },
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
          'screen-repair': {
            name: 'Screen Repair',
            price: 215
            }
          }
        }
      }
    },     
    'mini-1-2-3': {
       name: 'iPad Mini 1,2,3',
       title: 'Select iPad Color',
       data: {
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'slate': {
          name: 'Slate',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        }
      }
    },     
    'ipad-2-3-4': {
       name: 'iPad 2,3,4',
       title: 'Select iPad Color',
       data: {
        'white': {
          name: 'White Front Bezel',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'black': {
          name: 'Black Front Bezel',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        }
      }
    },      
    'ipad-5': {
       name: 'iPad 5',
       title: 'Select iPad Color',
       data: {
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 105
            }
          }
        }
      }
    },     
    'ipad-6': {
       name: 'iPad 6',
       title: 'Select iPad Color',
       data: {
        'gold': {
          name: 'Gold',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 145
              }
            }
          },
        'space-gray': {
          name: 'Space Gray',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 145
              }
            }
          },
        'silver': {
          name: 'Silver',
          title: 'Select Issue Type',
          data: {
            'screen-repair': {
              name: 'Screen Repair',
              price: 145
              }
            }
          }
        }
      }
    } 
  }
}

  


class App extends Component {

render() {

  return (
  	<Router>
    <div className='container'>
    	<Header />

      <Route exact path="/" component={Devices} />
      <Route exact path="/:device" render={(props)=> <Model data={data} {...props} />} />
      <Route exact path="/:device/:model" render={(props)=> <Colors data={data} {...props} />} />
      <Route exact path="/:device/:model/:color" render={(props)=> <Issue data={data} {...props} />} />

      <Footer />
    </div>
    </Router>
    )
}
}

export default App;
