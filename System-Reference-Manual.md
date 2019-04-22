(BB AI Image)

### BeagleBone AI

### System Reference Manual (SRM)

### THIS DOCUMENT

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

All derivative works are to be attributed to [Jason Kridner of BeagleBoard.org](https://beagleboard.org/about/jkridner).

Supply comments and errors via https://github.com/beagleboard/beaglebone-ai/issues.

All information in this document is subject to change without notice.

For an up to date version of this document refer to:

https://github.com/beagleboard/beaglebone-ai/wiki/System-Reference-Manual

## BeagleBone AI Design

## REGULATORY AND COMPLIANCE INFORMATION

## WARNINGS, RESTRICTIONS, AND DISCLAIMERS

## WARRANTY

# Table of Contents (insert here)


# 1.0 Introduction

Built on the proven BeagleBoard.org® open source Linux approach, BeagleBone® AI fills the gap between small SBCs and more powerful industrial computers. Based on the Texas Instruments AM5729, developers have access to the powerful SoC with the ease of BeagleBone® Black header and mechanical compatibility. BeagleBone® AI makes it easy to explore how artificial intelligence (AI) can be used in everyday life via TI C66x digital-signal-processor (DSP) cores and embedded-vision-engine (EVE) cores supported through an optimized TIDL machine learning OpenCL API with pre-installed tools. Focused on everyday automation in industrial, commercial and home applications.

# 2.0 Change History

### 2.1 Document Change History

### 2.2 Board changes

#### 2.2.1 Rev A0
Initial prototype revision. Not taken to production.

#### 2.2.2 Rev A1
Second round prototype.
* Fixed size of mounting holes.
* Added LED for WiFi status.
* Added microHDMI.
* Changed eMMC voltage from 3.3V to 1.8V to support HS200.
* Changed eMMC from 4GB to 16GB.
* Changed serial debug header from 6-pin 100mil pitch to 3-pin 1.5mm pitch.
* Switched expansion header from UART4 to UART5. The UART4 pins were used for the microHDMI.

#### 2.2.3 Rev A1a
Pilot run.
* Added pull-down resistor on serial debug header RX line.

#### 2.2.4 Rev A2
Proposed changes.
* Moved microSD card cage closer to microHDMI to fit cases better.
* Connected AM5729 ball AB10 to to P9.13 to provide a GPIO.
* HDMI hot-plug detection fixes planned (TBD). 


# 3.0 Connecting Up Your BeagleBone AI

### 3.1 What's In the Box

### 3.2 Main Connection Scenarios

### 3.3 Tethered to a PC

### 3.4 Standalone w/Display and Keyboard/Mouse


# 4.0 BeagleBone AI Overview

### 4.1 BeagleBone Compatibility (Do we want this?)

### 4.2 BeagleBone AI Features

### 4.3 Board Component Locations


# 5.0 BeagleBone AI High Level Specification

Block Diagram
Processor
DSP
EVEs
PRUs
Graphics Accelerator
Memory
Power
Connectivity

# 6.0 Detailed Hardware Design

# 7.0 Connectors

# 8.0 Cape Board Support

# 9.0 BeagleBone AI Mechanical

# 10.0 Pictures

# 11.0 Support Information