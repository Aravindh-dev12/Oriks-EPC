# ORIKS production video slots

The current homepage uses temporary royalty-free stock footage for the live prototype. Replace those remote URLs in `src/HomePurple.tsx` with ORIKS-approved compressed MP4/WebM files before final handover.

Recommended production filenames:

- `oriks-hero.mp4` — 16:9 corporate montage, 8–15 seconds, muted loop
- `oriks-wind.mp4` — wind farm / WTG / EBoP footage
- `oriks-solar.mp4` — solar plant / electrical infrastructure footage
- `oriks-substation.mp4` — pooling substation / switchyard / testing footage
- `oriks-transmission.mp4` — EHV line / towers / stringing / grid connection footage
- `oriks-commissioning.mp4` — testing, protection, SCADA or synchronisation footage

For web performance, keep each loop short, remove audio, export H.264 MP4 and preferably a WebM alternative, and target roughly 3–8 MB per homepage video where practical. Use ORIKS-approved project footage only.
